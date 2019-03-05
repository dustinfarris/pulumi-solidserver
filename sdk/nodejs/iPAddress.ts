// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IPAddress extends pulumi.CustomResource {
    /**
     * Get an existing IPAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IPAddressState, opts?: pulumi.CustomResourceOptions): IPAddress {
        return new IPAddress(name, <any>state, { ...opts, id: id });
    }

    /**
     * The provisionned IP address.
     */
    public /*out*/ readonly address: pulumi.Output<string>;
    /**
     * The class associated to the IP address.
     */
    public readonly class: pulumi.Output<string | undefined>;
    /**
     * The class parameters associated to the IP address.
     */
    public readonly classParameters: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Device Name to associate with the IP address (Require a 'Device Manager' license).
     */
    public readonly device: pulumi.Output<string | undefined>;
    /**
     * The MAC Address of the IP address to create.
     */
    public readonly mac: pulumi.Output<string | undefined>;
    /**
     * The short name or FQDN of the IP address to create.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The optionally requested IP address.
     */
    public readonly requestIp: pulumi.Output<string | undefined>;
    /**
     * The name of the space into which creating the IP address.
     */
    public readonly space: pulumi.Output<string>;
    /**
     * The name of the subnet into which creating the IP address.
     */
    public readonly subnet: pulumi.Output<string>;

    /**
     * Create a IPAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IPAddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IPAddressArgs | IPAddressState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: IPAddressState = argsOrState as IPAddressState | undefined;
            inputs["address"] = state ? state.address : undefined;
            inputs["class"] = state ? state.class : undefined;
            inputs["classParameters"] = state ? state.classParameters : undefined;
            inputs["device"] = state ? state.device : undefined;
            inputs["mac"] = state ? state.mac : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["requestIp"] = state ? state.requestIp : undefined;
            inputs["space"] = state ? state.space : undefined;
            inputs["subnet"] = state ? state.subnet : undefined;
        } else {
            const args = argsOrState as IPAddressArgs | undefined;
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            if (!args || args.space === undefined) {
                throw new Error("Missing required property 'space'");
            }
            if (!args || args.subnet === undefined) {
                throw new Error("Missing required property 'subnet'");
            }
            inputs["class"] = args ? args.class : undefined;
            inputs["classParameters"] = args ? args.classParameters : undefined;
            inputs["device"] = args ? args.device : undefined;
            inputs["mac"] = args ? args.mac : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["requestIp"] = args ? args.requestIp : undefined;
            inputs["space"] = args ? args.space : undefined;
            inputs["subnet"] = args ? args.subnet : undefined;
            inputs["address"] = undefined /*out*/;
        }
        super("solidserver:index/iPAddress:IPAddress", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IPAddress resources.
 */
export interface IPAddressState {
    /**
     * The provisionned IP address.
     */
    readonly address?: pulumi.Input<string>;
    /**
     * The class associated to the IP address.
     */
    readonly class?: pulumi.Input<string>;
    /**
     * The class parameters associated to the IP address.
     */
    readonly classParameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Device Name to associate with the IP address (Require a 'Device Manager' license).
     */
    readonly device?: pulumi.Input<string>;
    /**
     * The MAC Address of the IP address to create.
     */
    readonly mac?: pulumi.Input<string>;
    /**
     * The short name or FQDN of the IP address to create.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The optionally requested IP address.
     */
    readonly requestIp?: pulumi.Input<string>;
    /**
     * The name of the space into which creating the IP address.
     */
    readonly space?: pulumi.Input<string>;
    /**
     * The name of the subnet into which creating the IP address.
     */
    readonly subnet?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IPAddress resource.
 */
export interface IPAddressArgs {
    /**
     * The class associated to the IP address.
     */
    readonly class?: pulumi.Input<string>;
    /**
     * The class parameters associated to the IP address.
     */
    readonly classParameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Device Name to associate with the IP address (Require a 'Device Manager' license).
     */
    readonly device?: pulumi.Input<string>;
    /**
     * The MAC Address of the IP address to create.
     */
    readonly mac?: pulumi.Input<string>;
    /**
     * The short name or FQDN of the IP address to create.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The optionally requested IP address.
     */
    readonly requestIp?: pulumi.Input<string>;
    /**
     * The name of the space into which creating the IP address.
     */
    readonly space: pulumi.Input<string>;
    /**
     * The name of the subnet into which creating the IP address.
     */
    readonly subnet: pulumi.Input<string>;
}