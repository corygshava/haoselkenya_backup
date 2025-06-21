<?php
	// Set headers
	// header('Content-Type: application/json');

	// Check if email is posted
	if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
		$email = trim($_POST['email']);

		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			echo json_encode(["status" => "error", "message" => "Invalid email format."]);
			exit;
		}

		$file = 'subscriptions.json';

		// Read existing emails
		$emails = [];

		if (file_exists($file)) {
			$content = file_get_contents($file);
			$emails = json_decode($content, true);
			if (!is_array($emails)) $emails = [];
		}

		// Avoid duplicates
		if (in_array($email, $emails)) {
			echo json_encode(["status" => "info", "message" => "Email already subscribed."]);
			exit;
		}

		$emails[] = $email;

		// Save back
		if (file_put_contents($file, json_encode($emails, JSON_PRETTY_PRINT))) {
			// Try sending email
			try {
				$to = 'mufasaking@duck.com';
				$subject = 'New Subscription Notice';
				$message = "New subscriber: $email";
				$headers = "From: info@kamiru.com\r\nReply-To: info@kamiru.com";

				if (mail($to, $subject, $message, $headers)) {
					echo json_encode(["status" => "success", "message" => "Subscribed and notified."]);
				} else {
					echo json_encode(["status" => "warning", "message" => "Subscribed, but failed to send email."]);
				}
			} catch (Exception $e) {
				echo json_encode(["status" => "error", "message" => "Email error: " . $e->getMessage()]);
			}
		} else {
			echo json_encode(["status" => "error", "message" => "Failed to save email."]);
		}
	} else {
		echo json_encode(["status" => "error", "message" => "No email posted."]);
	}
?>
