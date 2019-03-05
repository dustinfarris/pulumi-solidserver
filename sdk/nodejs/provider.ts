// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the solidserver package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://pulumi.io/reference/programming-model.html#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        {
            if (!args || args.host === undefined) {
                throw new Error("Missing required property 'host'");
            }
            if (!args || args.password === undefined) {
                throw new Error("Missing required property 'password'");
            }
            if (!args || args.username === undefined) {
                throw new Error("Missing required property 'username'");
            }
            inputs["additionalTrustCertsFile"] = args ? args.additionalTrustCertsFile : undefined;
            inputs["host"] = args ? args.host : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["sslverify"] = pulumi.output(args ? args.sslverify : undefined).apply(JSON.stringify);
            inputs["username"] = args ? args.username : undefined;
        }
        super("solidserver", name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * PEM formatted file with additional certificates to trust for TLS connection
     */
    readonly additionalTrustCertsFile?: pulumi.Input<string>;
    /**
     * SOLIDServer API hostname or IP address
     */
    readonly host: pulumi.Input<string>;
    /**
     * SOLIDServer API user's password
     */
    readonly password: pulumi.Input<string>;
    /**
     * Enable/Disable ssl verify (Default : enabled)
     */
    readonly sslverify?: pulumi.Input<boolean>;
    /**
     * SOLIDServer API user's ID
     */
    readonly username: pulumi.Input<string>;
}