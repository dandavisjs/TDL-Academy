
import * as fs from "fs";
import General from '../components/quiz/questions/general.json'
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {

  const BASE_URL = 'https://localhost:3000'; //This is where you will define your base url. You can also use the default dev url http://localhost:3000

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "sitemap.xml.js",
        "404.js",
        "_app.js",
        "_document.js",
        "api"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.replace('.js', '')}`;
    });



  const dynamicPaths = General.quiz.map((question, i) => {

    return `${BASE_URL}/quiz/general/${i}`

  })

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      // This is where we would be putting in our URLs
      ${allPaths
      .map((url) => {
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
      })
      .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;