export interface Company {
    /* -------------------------------------------------------------------------- */
    /* Company                                                                     */
    /* -------------------------------------------------------------------------- */

    name: string;

    shortName: string;

    legalName: string;

    founded: number;

    version: string;

    stage: string;

    /* -------------------------------------------------------------------------- */
    /* Branding                                                                    */
    /* -------------------------------------------------------------------------- */

    tagline: string;

    description: string;

    mission: string;

    vision: string;

    /* -------------------------------------------------------------------------- */
    /* URLs                                                                        */
    /* -------------------------------------------------------------------------- */

    url: string;

    appUrl: string;

    docsUrl: string;

    statusUrl: string;

    githubUrl: string;

    /* -------------------------------------------------------------------------- */
    /* Contact                                                                     */
    /* -------------------------------------------------------------------------- */

    email: string;

    supportEmail: string;

    securityEmail: string;

    legalEmail: string;

    pressEmail: string;

    /* -------------------------------------------------------------------------- */
    /* Other                                                                       */
    /* -------------------------------------------------------------------------- */

    location: string;

    timezone: string;

    copyright: string;
}