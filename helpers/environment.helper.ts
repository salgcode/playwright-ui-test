/**  Valid environment name. */
export const VALID_ENVIRONMENTS: string[] = ['MOCK', 'DEV', 'SIT', 'UAT', 'LAB', 'BETA', 'PROD'];

/** Default environment to fall back to if no environment is specified in the execution script. */

export const DEFAULT_ENVIRONMENT = "DEV";
export default class environment {
    public static BASE_URL = process.env.BASE_URL;
    public static USERNAME = process.env.USERNAME;
    public static PASSWORD = process.env.PASSWORD;
}