export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
        body {
            background-color: #f7fafc;
        }
        .container {
            max-width: 32rem;
            margin: 2rem auto;
            background-color: #ffffff;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #4299e1;
            padding: 1.5rem;
            text-align: center;
            color: #ffffff;
        }
        .header h1 {
            font-size: 1.5rem;
            font-weight: bold;
        }
        .content {
            padding: 1.5rem;
            color: #4a5568;
        }
        .content p {
            margin-bottom: 1rem;
        }
        .code {
            text-align: center;
            margin: 2rem 0;
            font-size: 1.875rem;
            font-weight: bold;
            color: #48bb78;
        }
        .button {
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: #ed8936;
            border-radius: 0.25rem;
            color: #ffffff;
            text-decoration: none;
            text-align: center;
        }
        .button:hover {
            background-color: #dd6b20;
        }
        .footer {
            text-align: center;
            margin-top: 1.5rem;
            color: #a0aec0;
            font-size: 0.75rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Verify Your Email</h1>
        </header>
        <div class="content">
            <p>Hello {name},</p>
            <p>Thank you for signing up! Your verification code is:</p>
            <div class="code">{verificationCode}</div>
            <a href="#" class="button">Verify Email</a>
            <p>Please enter this code on the verification page to complete your registration.</p>
            <p>This code will expire in 5 minutes for security reasons.</p>
            <p>If you didn't create an account with us, please ignore this email.</p>
        </div>
        <footer class="footer">
            <p>© ${new Date().getFullYear()} TailwindTap. All Rights Reserved.</p>
            <p>This is an automated message; please do not reply to this email.</p>
        </footer>
    </div>
</body>
</html>

`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Success</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="max-w-lg mx-auto my-8 bg-white shadow-lg overflow-hidden">
        <header class="bg-green-500 p-6 text-center text-white">
            <h1 class="text-2xl font-bold">Password Reset Successful</h1>
        </header>
        <div class="p-6 space-y-4 text-gray-700">
            <p>Hello {user.name},</p>
            <p>Your password has been successfully reset. You can now log in with your new password.</p>
            <p>If you did not request this change, please contact our support team immediately.</p>
            <p>For your security, please do not share your password with anyone.</p>
        </div>
        <footer class="text-center mt-6 text-gray-500 text-xs">
            <p>© ${new Date().getFullYear()} TailwindTap. All Rights Reserved.</p>
            <p>This is an automated message; please do not reply to this email.</p>
        </footer>
    </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="max-w-lg mx-auto my-8 bg-white shadow-lg overflow-hidden">
        <header class="bg-yellow-500 p-6 text-center text-white">
            <h1 class="text-2xl font-bold">Password Reset Request</h1>
        </header>
        <div class="p-6 space-y-4 text-gray-700">
            <p>Hello {name},</p>
            <p>We received a request to reset the password for your account. If you made this request, please click the button below to reset your password:</p>
            <div class="text-center my-8">
                <a href="{reset_link}" class="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600">Reset Password</a>
            </div>
            <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
            <p>For security reasons, this link will expire in 24 hours.</p>
        </div>
        <footer class="text-center mt-6 text-gray-500 text-xs">
            <p>© ${new Date().getFullYear()} TailwindTap. All Rights Reserved.</p>
            <p>This is an automated message; please do not reply to this email.</p>
        </footer>
    </div>
</body>
</html>
`;

export const USER_SUCCESSFUL_LOGIN_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Successful Login Notification</title>
    <style>
        body {
            background-color: #f4f4f9;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
        }
        .header {
            background: #38a169;
            padding: 20px;
            text-align: center;
            color: #fff;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            color: #333;
        }
        .content p {
            margin: 15px 0;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background: #e53e3e;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
        }
        .footer {
            padding: 10px 20px;
            text-align: center;
            font-size: 12px;
            color: #777;
            background: #f9f9f9;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Successful Login Notification</h1>
        </div>
        <div class="content">
            <p>Hello {user.name},</p>
            <p>We noticed that you have successfully logged into your account. If this was you, great! If you did not log in recently, please secure your account immediately.</p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="{security_link}" class="button">Secure Your Account</a>
            </div>
            <p>For your reference, the login took place on:</p>
            <p><strong>Date:</strong> {login_date}</p>
            <p><strong>Time:</strong> {login_time}</p>
            <p><strong>Location:</strong> {login_location}</p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} TailwindTap. All Rights Reserved.</p>
            <p>This is an automated message; please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;
