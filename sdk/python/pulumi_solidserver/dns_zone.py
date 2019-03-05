# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class DNSZone(pulumi.CustomResource):
    class_: pulumi.Output[str]
    class_parameters: pulumi.Output[dict]
    createptr: pulumi.Output[bool]
    dnsserver: pulumi.Output[str]
    name: pulumi.Output[str]
    type: pulumi.Output[str]
    view: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, class_=None, class_parameters=None, createptr=None, dnsserver=None, name=None, type=None, view=None, __name__=None, __opts__=None):
        """
        Create a DNSZone resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['class_'] = class_

        __props__['class_parameters'] = class_parameters

        __props__['createptr'] = createptr

        if dnsserver is None:
            raise TypeError('Missing required property dnsserver')
        __props__['dnsserver'] = dnsserver

        if name is None:
            raise TypeError('Missing required property name')
        __props__['name'] = name

        __props__['type'] = type

        __props__['view'] = view

        super(DNSZone, __self__).__init__(
            'solidserver:index/dNSZone:DNSZone',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
