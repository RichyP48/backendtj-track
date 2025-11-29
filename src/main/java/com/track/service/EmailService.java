package com.track.service;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {
    private  final JavaMailSender mailSender;
    @Value("${spring.mail.properties.mail.smtp.from}")
    private String fromEmail;

//    public void sendWelcomeEmail(String toEmail, String name) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(fromEmail);
//        message.setTo(toEmail);
//        message.setSubject("Bienvenue sur TJ-Track");
//        message.setText(
//                "Bonjour " + name + ",\n\n" +
//                        "Nous vous souhaitons la bienvenue sur TJ-Track !\n\n" +
//                        "Votre inscription a bien été prise en compte, et vous pouvez désormais profiter de l’ensemble de nos services :\n" +
//                        "- Suivi simplifié de vos commandes\n" +
//                        "- Historique et gestion de vos achats\n" +
//                        "- Accès rapide à notre support client\n\n" +
//                        "Nous sommes ravis de vous compter parmi nos utilisateurs.\n\n" +
//                        "À très bientôt,\n" +
//                        "L’équipe TJ-Track"
//        );
//        mailSender.send(message);
//    }

    public void sendWelcomeEmail(String toEmail, String name) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Bienvenue sur TJ-Track !");

            String htmlContent = """
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f2f2f2;">
    <table width="100%%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">
                <!-- Conteneur principal -->
                <table width="600" cellpadding="20" cellspacing="0" style="background-color:#ffffff; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
                    
                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding-bottom:10px;">
                            <img src="https://ton-site.com/logo.png" alt="TJ-Track" width="120" style="display:block;">
                        </td>
                    </tr>

                    <!-- Titre -->
                    <tr>
                        <td align="center">
                            <h2 style="color:#333333; margin:0;">Bienvenue sur <span style="color:#007BFF;">TJ-Track</span> !</h2>
                        </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                        <td style="color:#555555; font-size:15px; text-align: justify; line-height:1.6;">
                            Bonjour <strong>%s</strong>,<br><br>
                            Nous sommes ravis de vous accueillir sur TJ-Track !<br><br>
                            Votre compte a été créé avec succès. Vous pouvez maintenant commencer à explorer notre plateforme et profiter de nos services de suivi et e-commerce.<br><br>
                            Cliquez sur le bouton ci-dessous pour accéder à votre espace personnel :
                        </td>
                    </tr>

                    <!-- Bouton -->
                    <tr>
                        <td align="center">
                            <a href="https://ton-site.com/login"
                               style="background:#007BFF; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:6px; font-size:16px; display:inline-block;">
                               Accéder à mon compte
                            </a>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="color:#999999; font-size:12px; text-align:center; padding-top:20px;">
                            © 2025 TJ-Track. Tous droits réservés.<br>
                            Vous recevez cet email car vous vous êtes inscrit sur notre site.<br>
                            <a href="https://ton-site.com/conditions" style="color:#007BFF; text-decoration:none;">Conditions d'utilisation</a> |
                            <a href="https://ton-site.com/confidentialite" style="color:#007BFF; text-decoration:none;">Politique de confidentialité</a>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
""".formatted(name);
            helper.setText(htmlContent, true);

            mailSender.send(message);

        } catch (Exception e) {
            //log.error("Failed to send OTP email to {}: {}", toEmail, e.getMessage(), e);
            throw new RuntimeException("Failed to send OTP email: " + e.getMessage(), e);
        }
    }
//    public void sendResetOtpEmail(String toEmail, String otp) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(fromEmail);
//        message.setTo(toEmail);
//        message.setSubject("Password reset OTP");
//        message.setText("Your otp for resetting your password is " + otp +". Use this OTP to proceed with resetting your password.");
//        mailSender.send(message);
//    }
public void sendResetOtpEmail(String toEmail, String otp) {
    try {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(fromEmail);
        helper.setTo(toEmail);
        helper.setSubject("Réinitialisation de mot de passe - Code OTP");

        String htmlContent = """
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f2f2f2;">
    <table width="100%%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">

                <table width="600" cellpadding="20" cellspacing="0" 
                       style="background-color:#ffffff; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">

                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding-bottom:10px;">
                            <img src="https://ton-site.com/logo.png" alt="TJ-Track" width="120" style="display:block;">
                        </td>
                    </tr>

                    <!-- Title -->
                    <tr>
                        <td align="center">
                            <h2 style="color:#333333; margin:0;">Réinitialisation du mot de passe</h2>
                        </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                        <td style="color:#555555; font-size:15px; text-align:justify; line-height:1.6;">
                            Vous avez demandé à réinitialiser votre mot de passe.<br><br>
                            Utilisez le code ci-dessous pour procéder à la réinitialisation :
                        </td>
                    </tr>

                    <!-- OTP -->
                    <tr>
                        <td align="center" style="padding-top:5px; padding-bottom:10px;">
                            <div style="font-size:28px; font-weight:bold; letter-spacing:3px; 
                                        background:#007BFF; color:#ffffff; padding:12px 25px; 
                                        border-radius:6px; display:inline-block;">
                                %s
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="color:#999999; font-size:12px; text-align:center; padding-top:20px;">
                            Ce code expire dans 10 minutes.<br>
                            Si vous n'êtes pas à l'origine de cette demande, veuillez ignorer cet email.<br><br>
                            © 2025 TJ-Track. Tous droits réservés.
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>
</body>
</html>
""".formatted(otp);

        helper.setText(htmlContent, true);
        mailSender.send(message);

    } catch (Exception e) {
        e.printStackTrace();
    }
    }

//    public void sendOtpEmail(String toEmail, String otp) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(fromEmail);
//        message.setTo(toEmail);
//        message.setSubject("Account verification OTP");
//        message.setText("Your otp is: " + otp + "\n\nVerify your account using this OTP");
//        mailSender.send(message);
//    }

public void sendOtpEmail(String toEmail, String otp) {
    try {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(fromEmail);
        helper.setTo(toEmail);
        helper.setSubject("Vérification de votre compte - Code OTP");

        String htmlContent = """
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f2f2f2;">
    <table width="100%%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">

                <table width="600" cellpadding="20" cellspacing="0" 
                       style="background-color:#ffffff; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">

                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding-bottom:10px;">
                            <img src="https://ton-site.com/logo.png" alt="TJ-Track" width="120" style="display:block;">
                        </td>
                    </tr>

                    <!-- Title -->
                    <tr>
                        <td align="center">
                            <h2 style="color:#333333; margin:0;">Vérification de votre compte</h2>
                        </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                        <td style="color:#555555; font-size:15px; text-align:justify; line-height:1.6;">
                            Merci de vous être inscrit sur TJ-Track !<br><br>
                            Pour activer votre compte, veuillez utiliser le code OTP suivant :
                        </td>
                    </tr>

                    <!-- OTP -->
                    <tr>
                        <td align="center" style="padding-top:5px; padding-bottom:10px;">
                            <div style="font-size:28px; font-weight:bold; letter-spacing:3px;
                                        background:#28a745; color:#ffffff; padding:12px 25px;
                                        border-radius:6px; display:inline-block;">
                                %s
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="color:#999999; font-size:12px; text-align:center; padding-top:20px;">
                            Ce code expire dans 10 minutes.<br>
                            Si vous n'êtes pas à l'origine de cette création de compte, ignorez simplement cet email.<br><br>
                            © 2025 TJ-Track. Tous droits réservés.
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>
</body>
</html>
""".formatted(otp);

        helper.setText(htmlContent, true);
        mailSender.send(message);

    } catch (Exception e) {
        e.printStackTrace();
    }
}
    public void sendOrderConfirmationEmail(String toEmail, String name, String orderId, String totalAmount) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Votre commande a été confirmée – TJ-Track");

            String html = """
<html>
<body style="margin:0; padding:0; font-family:Arial, sans-serif; background:#f5f6f8;">
<table width="100%%"><tr><td align="center">
<table width="600" cellpadding="20" style="background:#fff;border-radius:8px;">
    
    <tr>
        <td align="center">
            <h2 style="color:#333;margin:0;">Confirmation de commande</h2>
            <p style="color:#777;margin:5px 0 0;">Merci pour votre achat, <strong>%s</strong> !</p>
        </td>
    </tr>

    <tr>
        <td style="color:#444;font-size:15px;line-height:1.6;">
            Votre commande <strong>#%s</strong> a été enregistrée avec succès.<br>
            Montant total : <strong>%s</strong><br><br>
            Nous vous tiendrons informé dès qu’elle sera expédiée.
        </td>
    </tr>

    <tr>
        <td align="center">
            <a href="https://ton-site.com/orders"
               style="background:#007BFF;color:#fff;padding:12px 25px;text-decoration:none;
               border-radius:6px;font-size:16px;display:inline-block;">
               Voir ma commande
            </a>
        </td>
    </tr>

    <tr>
        <td style="color:#999;font-size:12px;text-align:center;">
            © 2025 TJ-Track – Tous droits réservés.
        </td>
    </tr>

</table>
</td></tr></table>
</body>
</html>
""".formatted(name, orderId, totalAmount);

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) { e.printStackTrace(); }
    }

    public void sendShippingEmail(String toEmail, String name, String trackingCode) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Votre commande est en route – TJ-Track");

            String html = """
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f6f8;">
<table width="100%%"><tr><td align="center">
<table width="600" cellpadding="20" style="background:#fff;border-radius:8px;">

    <tr><td align="center">
        <h2 style="color:#333;margin:0;">Votre commande est en route 🚚</h2>
        <p style="color:#555;margin:5px 0;">Bonjour <strong>%s</strong>, votre colis a été expédié.</p>
    </td></tr>

    <tr>
        <td style="color:#444;font-size:15px;line-height:1.6;">
            Numéro de suivi : <strong>%s</strong><br>
            Vous pouvez suivre en temps réel l’avancement de la livraison via le bouton ci-dessous :
        </td>
    </tr>

    <tr>
        <td align="center">
            <a href="https://ton-site.com/track/%s"
               style="background:#28a745;color:#fff;padding:12px 25px;text-decoration:none;
               border-radius:6px;font-size:16px;display:inline-block;">
               Suivre mon colis
            </a>
        </td>
    </tr>

    <tr><td style="color:#999;font-size:12px;text-align:center;">
        © 2025 TJ-Track – Tous droits réservés.
    </td></tr>

</table>
</td></tr></table>
</body>
</html>
""".formatted(name, trackingCode, trackingCode);

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) { e.printStackTrace(); }
    }
    public void sendDeliverySuccessEmail(String toEmail, String name, String orderId) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Votre colis a été livré – TJ-Track");

            String html = """
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f6f8;">
<table width="100%%"><tr><td align="center">
<table width="600" cellpadding="20" style="background:#fff;border-radius:8px;">

    <tr><td align="center">
        <h2 style="color:#333;margin:0;">Livraison réussie 🎉</h2>
        <p style="color:#555;margin:5px 0;">Bonjour <strong>%s</strong>, votre commande est arrivée !</p>
    </td></tr>

    <tr>
        <td style="color:#444;font-size:15px;line-height:1.6;">
            Votre commande <strong>#%s</strong> a été livrée avec succès.<br>
            Merci d’avoir utilisé TJ-Track pour votre expérience d’achat.
        </td>
    </tr>

    <tr>
        <td align="center">
            <a href="https://ton-site.com/orders"
               style="background:#007bff;color:#fff;padding:12px 25px;text-decoration:none;
               border-radius:6px;font-size:16px;display:inline-block;">
               Voir ma commande
            </a>
        </td>
    </tr>

    <tr><td style="color:#999;font-size:12px;text-align:center;">
        © 2025 TJ-Track – Tous droits réservés.
    </td></tr>

</table>
</td></tr></table>
</body>
</html>
""".formatted(name, orderId);

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) { e.printStackTrace(); }
    }
    public void sendNotificationEmail(String toEmail, String name, String subject, String messageContent) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject(subject);

            String html = """
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f6f8;">
<table width="100%%"><tr><td align="center">
<table width="600" cellpadding="20" style="background:#fff;border-radius:8px;">

    <tr><td align="center">
        <h2 style="color:#333;margin:0;">Notification TJ-Track</h2>
        <p style="color:#555;margin:5px 0;">Bonjour <strong>%s</strong>,</p>
    </td></tr>

    <tr>
        <td style="color:#444;font-size:15px;line-height:1.6;">
            %s
        </td>
    </tr>

    <tr><td style="color:#999;font-size:12px;text-align:center;">
        © 2025 TJ-Track – Tous droits réservés.
    </td></tr>

</table>
</td></tr></table>
</body>
</html>
""".formatted(name, messageContent);

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) { e.printStackTrace(); }
    }

    public void sendRegistrationPendingEmail(String toEmail, String name) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Inscription reçue - En cours de traitement");

            String html = """
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f6f8;">
<table width="100%%"><tr><td align="center">
<table width="600" cellpadding="20" style="background:#fff;border-radius:8px;">

    <tr><td align="center">
        <h2 style="color:#333;margin:0;">Inscription reçue ✅</h2>
        <p style="color:#555;margin:5px 0;">Bonjour <strong>%s</strong>,</p>
    </td></tr>

    <tr>
        <td style="color:#444;font-size:15px;line-height:1.6;">
            Votre inscription sur TJ-Track a bien été reçue.<br><br>
            Votre compte est actuellement <strong>en cours de traitement</strong> par notre équipe.<br>
            Vous recevrez un email de confirmation dès que votre compte sera activé.<br><br>
            Merci de votre patience.
        </td>
    </tr>

    <tr><td style="color:#999;font-size:12px;text-align:center;">
        © 2025 TJ-Track – Tous droits réservés.
    </td></tr>

</table>
</td></tr></table>
</body>
</html>
""".formatted(name);

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) { e.printStackTrace(); }
    }

    public void sendApprovalEmail(String toEmail, String name) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Compte approuvé - Bienvenue sur TJ-Track !");

            String html = """
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f6f8;">
<table width="100%%"><tr><td align="center">
<table width="600" cellpadding="20" style="background:#fff;border-radius:8px;">

    <tr><td align="center">
        <h2 style="color:#28a745;margin:0;">Compte approuvé ! 🎉</h2>
        <p style="color:#555;margin:5px 0;">Félicitations <strong>%s</strong> !</p>
    </td></tr>

    <tr>
        <td style="color:#444;font-size:15px;line-height:1.6;">
            Votre compte TJ-Track a été <strong>approuvé</strong> par notre équipe.<br>
            Vous pouvez maintenant vous connecter et profiter de tous nos services.<br><br>
            Bienvenue dans la communauté TJ-Track !
        </td>
    </tr>

    <tr>
        <td align="center">
            <a href="https://ton-site.com/login"
               style="background:#28a745;color:#fff;padding:12px 25px;text-decoration:none;
               border-radius:6px;font-size:16px;display:inline-block;">
               Se connecter
            </a>
        </td>
    </tr>

    <tr><td style="color:#999;font-size:12px;text-align:center;">
        © 2025 TJ-Track – Tous droits réservés.
    </td></tr>

</table>
</td></tr></table>
</body>
</html>
""".formatted(name);

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) { e.printStackTrace(); }
    }

    public void sendRejectionEmail(String toEmail, String name) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Inscription non approuvée - TJ-Track");

            String html = """
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f6f8;">
<table width="100%%"><tr><td align="center">
<table width="600" cellpadding="20" style="background:#fff;border-radius:8px;">

    <tr><td align="center">
        <h2 style="color:#dc3545;margin:0;">Inscription non approuvée</h2>
        <p style="color:#555;margin:5px 0;">Bonjour <strong>%s</strong>,</p>
    </td></tr>

    <tr>
        <td style="color:#444;font-size:15px;line-height:1.6;">
            Nous vous remercions de votre intérêt pour TJ-Track.<br><br>
            Malheureusement, votre demande d'inscription n'a pas pu être approuvée à ce moment.<br>
            Pour plus d'informations, vous pouvez nous contacter à support@tj-track.com.<br><br>
            Cordialement,<br>L'équipe TJ-Track
        </td>
    </tr>

    <tr><td style="color:#999;font-size:12px;text-align:center;">
        © 2025 TJ-Track – Tous droits réservés.
    </td></tr>

</table>
</td></tr></table>
</body>
</html>
""".formatted(name);

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) { e.printStackTrace(); }
    }

    public void sendAdminNotificationEmail(String adminEmail, String userName, String userEmail, String userRole) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(adminEmail);
            helper.setSubject("Nouvelle inscription en attente d'approbation - TJ-Track");

            String html = """
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f6f8;">
<table width="100%%"><tr><td align="center">
<table width="600" cellpadding="20" style="background:#fff;border-radius:8px;">

    <tr><td align="center">
        <h2 style="color:#007bff;margin:0;">Nouvelle inscription 📋</h2>
        <p style="color:#555;margin:5px 0;">Action requise</p>
    </td></tr>

    <tr>
        <td style="color:#444;font-size:15px;line-height:1.6;">
            Un nouvel utilisateur s'est inscrit et attend votre approbation :<br><br>
            <strong>Nom :</strong> %s<br>
            <strong>Email :</strong> %s<br>
            <strong>Rôle :</strong> %s<br><br>
            Veuillez vous connecter au panneau d'administration pour approuver ou rejeter cette inscription.
        </td>
    </tr>

    <tr>
        <td align="center">
            <a href="https://ton-site.com/admin/pending-users"
               style="background:#007bff;color:#fff;padding:12px 25px;text-decoration:none;
               border-radius:6px;font-size:16px;display:inline-block;">
               Gérer les inscriptions
            </a>
        </td>
    </tr>

    <tr><td style="color:#999;font-size:12px;text-align:center;">
        © 2025 TJ-Track – Tous droits réservés.
    </td></tr>

</table>
</td></tr></table>
</body>
</html>
""".formatted(userName, userEmail, userRole);

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) { e.printStackTrace(); }
    }

}
