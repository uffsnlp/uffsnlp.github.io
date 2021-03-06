/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-scroll-reveal",
        "gatsby-plugin-fontawesome-css",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "notebooks",
                path: `${__dirname}/src/data/posts/notebooks`,
                ignore: ["**/.ipynb_checkpoints"],
            },
        },
        {
            resolve: "@rafaelquintanilha/gatsby-transformer-ipynb",
            options: {
                notebookProps: {
                    displayOrder: ["image/png", "text/html", "text/plain"],
                    showPrompt: false,
                },
            },
        },
    ],
}
