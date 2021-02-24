/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-scroll-reveal",
            options: {
                threshold: 1,
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "notebooks",
                path: `${__dirname}/src/posts/notebooks`,
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
