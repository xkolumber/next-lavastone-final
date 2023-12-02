interface EmailProps {
  images: string[];
}

export const generateEmailHtml = ({ images }: EmailProps): string => {
  const imagesHtml = images
    .map(
      (imageUrl) => `<img src="${imageUrl}" alt="Image" class="email_image" />`
    )
    .join("");
  return `
  <html>
  <head>
    <title>Email Template</title>
    <style>
      /* Inline CSS for styling */
      /* ... (existing styles) */
      .main {
        background-color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        font-size:18px;
      }
      .container {
        margin: 0 auto;
        padding: 20px 0 48px;
        width: 580px;
      }
      .image_container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center; /* Center vertically */
        margin-bottom: 20px; /* Add margin-bottom to create space */
        
      }
      .container_quoute{
        padding:16px;
        background-color: #F2F3F3;
        font-size:18px;
        font-weight:200;
        border-radius:6px;
      }
      .email_logo {
        width: 200px;
        display: block;
        margin: 0 auto; /* Center horizontally */
      }
      .email_image {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        margin-bottom: 20px;
        border-radius: 16px;
      }
      .questions {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center; /* Center vertically */
        border-top: 1px solid #CCCCCC;
        gap: 100px;
        margin-top: 20px;
        padding-top:20px;
        text-align: center;
      }
      
      .questions a {
        display: inline-block;
        line-height: 0; /* Reset line height to remove spacing */
      }
      
      .questions img {
        min-width: 45px;
        height: 45px;
        vertical-align: middle; /* Helps with vertical alignment */
        margin-right:10px;
      }
      .questions_title {
        font-weight: 700;
        font-size: 18px;
      }
      a:link {
        color: red;
      }
      
    </style>
  </head>
  <body>
    <div class="main">
      <div class="container">
        <div class="image_container">
        <img src="https://storage.googleapis.com/lavastone/uvod/logo_full_png.png" alt="Logo" class="email_logo" />
        </div>
        <p class="container_quoute">
        "Spoločne vytvoríme dizajn a prevedenie, ktoré sofistikovaným spôsobom doplní váš interiér či exteriér.
        Sme tu pre vás od fázy návrhu cez odporúčanie najvhodnejších materiálov až po moment realizácie, kedy nebudete mať slov."
        </p>
        <div class="thank-you">
          <p>Tu sa nachádzajú Vaše obľúbené kúsky:</p>
        </div>
        ${imagesHtml}
        <div class="questions">
        <a href="https://www.facebook.com/lavastone.sk"> <img src="https://storage.googleapis.com/lavastone/uvod/fb_icon2.png" alt="Fb icon" class="questions_q" /></a>
        <a href="https://www.instagram.com/lavastone_/"> <img src="https://storage.googleapis.com/lavastone/uvod/ig_icon2.png" alt="Ig icon" class="questions_q" /></a>
        <a href="https://www.linkedin.com"> <img src="https://storage.googleapis.com/lavastone/uvod/linked_icon2.png" alt="Logo" class="questions_q" /></a>
         
        </div>
      </div>
    </div>
  </body>
</html>

  `;
};
