export class CloudSpace {
    public id : string;
    public name: string;
    public description: string;
    public vcs_url: string;
    public test_server: {
        url: string,
        enact_string: string,
        test_app: string; 
    }
}