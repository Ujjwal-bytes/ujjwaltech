import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define types for request body
interface ContactRequestBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    // Parse request body
    const body: ContactRequestBody = await request.json();
    const { name, email, phone, message } = body;

    // Validate input
    const errors: string[] = [];
    if (!name || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please provide a valid email address');
    }
    if (!message || message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: errors.map((err, idx) => ({ [`field${idx}`]: err })),
        },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Template variables setup
    const subject = `New Portfolio Inquiry from ${name}`;
    const BRAND_COLOR = '#ff4500'; // Orange theme color
    
    // Formatting variables for the buttons
    const cleanPhone = phone ? phone.replace(/\D/g, '') : '';
    const whatsappPhone = phone ? phone.replace(/\D/g, '') : '';

    // Email HTML content using your professional template (Text-based Ujjwal Tech brand)
    const htmlContent = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>${subject}</title>
        
        <style type="text/css">
          /* Outlook and older clients */
          .ExternalClass, .ReadMsgBody {
            width: 100%;
            background-color: #f8fafc;
          }
          
          body, table, td, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          
          table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse !important;
          }
          
          body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            background-color: #f8fafc;
          }
          
          @media screen and (max-width: 600px) {
            body {
              padding: 10px 4px !important;
            }
            .wrapper-table {
              width: 100% !important;
              max-width: 100% !important;
            }
            .header-cell {
              padding: 14px 14px !important;
            }
            .responsive-padding {
              padding: 20px 14px !important;
            }
            .footer-cell {
              padding: 12px 14px 20px 14px !important;
            }
            .mobile-left {
              text-align: left !important;
            }
            .mobile-right {
              text-align: right !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 20px 12px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">

        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center">
              
              <table class="wrapper-table" border="0" cellpadding="0" cellspacing="0" width="560" style="background-color: #ffffff; box-shadow: 0px 6px 24px rgba(148, 163, 184, 0.1); width: 100%; max-width: 560px; overflow: hidden; border-collapse: separate !important;">
                
                <tr>
                  <td class="header-cell" style="background: ${BRAND_COLOR}; padding: 20px 24px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td class="mobile-left" align="left" valign="middle" style="font-size: 20px; font-weight: 800; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; letter-spacing: -0.5px;">
                          Ujjwal Tech
                        </td>
                        <td class="mobile-right" align="right" valign="middle">
                          <span style="font-size: 12px; font-weight: 500; color: #ffffff; background-color: rgba(255,255,255,0.15); padding: 4px 12px; display: inline-block; vertical-align: middle; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                            New lead
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="responsive-padding" style="padding: 24px 32px;">
                    
                    <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700; color: #0f172a; letter-spacing: -0.3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      New Client Enquiry
                    </h2>

                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="48%" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td style="padding: 6px 0;">
                                <div style="font-size: 12px; color: #64748b; font-weight: 500; margin-bottom: 2px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">Full Name</div>
                                <div style="font-size: 14px; color: #0f172a; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${name}</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 6px 0;">
                                <div style="font-size: 12px; color: #64748b; font-weight: 500; margin-bottom: 2px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">Email Address</div>
                                <div style="font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                                  <a href="mailto:${email}" style="color: ${BRAND_COLOR}; text-decoration: none; word-break: break-all; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${email}</a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 6px 0;">
                                <div style="font-size: 12px; color: #64748b; font-weight: 500; margin-bottom: 2px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">Phone Number</div>
                                <div style="font-size: 14px; color: #0f172a; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${phone || 'Not provided'}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        
                        <td width="4%">&nbsp;</td>
                        
                        <td width="48%" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td style="padding: 6px 0;">
                                <div style="font-size: 12px; color: #0f172a; font-weight: 700; margin-bottom: 2px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">Inquiry Platform</div>
                                <div style="font-size: 14px; font-weight: 600; color: ${BRAND_COLOR}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                                  Portfolio Website
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 16px;">
                      <tr>
                        <td>
                          <div style="background-color: #f8fafc; padding: 12px 16px; border-radius: 6px;">
                            <div style="font-size: 12px; font-weight: 700; color: #64748b; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">Client message</div>
                            <div style="font-size: 13px; color: #334155; line-height: 1.5; font-style: italic; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                              "${message.substring(0, 300)}${message.length > 300 ? '...' : ''}"
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>

                    ${phone ? `
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 20px;">
                      <tr>
                        <td align="left">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td bgcolor="${BRAND_COLOR}" style="border-radius: 6px;">
                                <a href="tel:${cleanPhone}" style="font-size: 13px; font-weight: 700; color: #ffffff; text-decoration: none; padding: 10px 18px; display: block; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; border-radius: 6px;">
                                  Call Client
                                </a>
                              </td>
                              <td width="12">&nbsp;</td>
                              <td bgcolor="#ffffff" style="border: 1.5px solid #e2e8f0; border-radius: 6px;">
                                <a href="https://wa.me/${whatsappPhone}" style="font-size: 13px; font-weight: 700; color: #0f172a; text-decoration: none; padding: 8.5px 18px; display: block; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; border-radius: 6px;">
                                  WhatsApp Chat
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    ` : ''}

                  </td>
                </tr>

                <tr>
                  <td class="footer-cell" style="padding: 12px 32px 24px 32px; text-align: center; background-color: #ffffff;">
                    <div style="background: #e2e8f0; height: 1px; font-size: 1px; line-height: 1px; margin-bottom: 16px; width: 100%;">&nbsp;</div>
                    <div style="font-size: 11px; color: #94a3b8; letter-spacing: 0.1px; line-height: 1.4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      Ujjwal Tech • Vasai East • <a href="mailto:support@ujjwaltech.com" style="color: ${BRAND_COLOR}; text-decoration: none; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">support@ujjwaltech.com</a>
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>

      </body>
      </html>
    `;

    // Email content options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject,
      html: htmlContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! Your message has been sent successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong while sending your message. Please try again later.',
      },
      { status: 500 }
    );
  }
}