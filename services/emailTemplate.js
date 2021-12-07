module.exports = ({emailFrom, downloadLink, size, expires,ison,protection}) => {
    return `
        <!doctype html>
            <html>
            <head>
                <meta name="viewport" content="width=device-width">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <title>Simple Transactional Email</title>
                <style>
                /* -------------------------------------
                    INLINED WITH htmlemail.io/inline
                ------------------------------------- */
                /* -------------------------------------
                    RESPONSIVE AND MOBILE FRIENDLY STYLES
                ------------------------------------- */
                @media only screen and (max-width: 620px) {
                table[class=body] h1 {
                    font-size: 28px !important;
                    margin-bottom: 10px !important;
                }
                table[class=body] p,
                        table[class=body] ul,
                        table[class=body] ol,
                        table[class=body] td,
                        table[class=body] span,
                        table[class=body] a {
                    font-size: 16px !important;
                }
                table[class=body] .wrapper,
                        table[class=body] .article {
                    padding: 10px !important;
                }
                table[class=body] .content {
                    padding: 0 !important;
                }
                table[class=body] .container {
                    padding: 0 !important;
                    width: 100% !important;
                }
                table[class=body] .main {
                    border-left-width: 0 !important;
                    border-radius: 0 !important;
                    border-right-width: 0 !important;
                }
                table[class=body] .btn table {
                    width: 100% !important;
                }
                table[class=body] .btn a {
                    width: 100% !important;
                }
                table[class=body] .img-responsive {
                    height: auto !important;
                    max-width: 100% !important;
                    width: auto !important;
                }
                }
            
                /* -------------------------------------
                    PRESERVE THESE STYLES IN THE HEAD
                ------------------------------------- */
                @media all {
                .ExternalClass {
                    width: 100%;
                }
                .ExternalClass,
                        .ExternalClass p,
                        .ExternalClass span,
                        .ExternalClass font,
                        .ExternalClass td,
                        .ExternalClass div {
                    line-height: 100%;
                }
                .apple-link a {
                    color: inherit !important;
                    font-family: inherit !important;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    text-decoration: none !important;
                }
                #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                    font-size: inherit;
                    font-family: inherit;
                    font-weight: inherit;
                    line-height: inherit;
                }
                .btn-primary table td:hover {
                    background-color: #34495e !important;
                }
                .btn-primary a:hover {
                    background-color: #34495e !important;
                    border-color: #34495e !important;
                }
                }
                </style>
            </head>
            <body class="" style="  font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;  background: rgb(2,0,36);
                background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,3,95,1) 22%, rgba(0,212,255,1) 100%); ">
                <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
                    <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
                    <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 80px 10px 10px 10px;">
            
                        <!-- START CENTERED WHITE CONTAINER -->
                        <span class="preheader" style="color: transparent;
                        
                        display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
                          
                        <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: white; border-radius: 3px;">
                        <div style="height:40px;width:150px;position:relative;margin-top:20px;margin-left:20px;background:rgb(3, 21, 70);padding-left:20px;border-radius:4px;background-size:cover;"><span style="postion:relative;top:10px;font-weight:bold;color:white;font-size:27px">Share</span><span style="postion:relative;top:10px;font-weight:bold;font-size:27px;color:rgb(154, 156, 160)">Rasp</span></div>
                        
                        
                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                            <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding:20px;">
                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                                <tr>
                                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hello,</p>
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"><b>${emailFrom}</b> has shared a file with you.</p>
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">${size} in total ・ Expires in ${expires}</p>
                                    <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                                    <tbody>
                                        <tr>
                                        <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                            <tbody>
                                                <tr>
                                                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="${downloadLink}" target="_blank" style="display: inline-block; color: #ffffff;background-image: linear-gradient(to right, rgb(255, 0, 55) , rgb(255, 94, 0));; border: solid 1px white; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize;">Download file</a> </td>

                                                </tr>
                                            </tbody>
                                            </table>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    <p style="color:green;font-size:14px;font-weight: normal"> ${ison==true?"Password for file : "+protection:""} </p> 
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">
                                    Thank you for using ShareRasp service.</p>
                                    <p style="font-family: sans-serif; color:rgb(141, 141, 143); font-size: 10px; font-weight: normal; margin: 0; Margin-bottom: 15px;">
                                    ShareRasp is a secure file sharing and storage solution, enabling you to access and manage your content from anywhere on any device.You can connect with us via facebook,youtube,instagram,twitter.You can 
                                    follow us on these social media platform.
                                    
                                    </p>
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>
            
                        <!-- END MAIN CONTENT AREA -->
                        </table>
            
                        <!-- START FOOTER -->
                        <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                            <tr>
                            <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                                <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">ShareRasp  main street 6, Dwarka-3 New Delhi</span>
                                <br> Want to share a file? <a href="http://localhost:3000" style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">ShareRasp</a>.
                            </td>
                            </tr>
                            <tr>
                            <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                                @ 2021 Copyright | <a href="" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">www.sharerasp.com</a>.
                            </td>
                            </tr>
                        </table>
                        </div>
                        <!-- END FOOTER -->
            
                    <!-- END CENTERED WHITE CONTAINER -->
                    </div>
                    </td>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
                </tr>
                </table>
            </body>
        </html>
    `;
}