# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

__config__ = pulumi.Config('solidserver')

additional_trust_certs_file = __config__.get('additionalTrustCertsFile')
"""
PEM formatted file with additional certificates to trust for TLS connection
"""

host = __config__.require('host')
"""
SOLIDServer API hostname or IP address
"""

password = __config__.require('password')
"""
SOLIDServer API user's password
"""

sslverify = __config__.get('sslverify')
"""
Enable/Disable ssl verify (Default : enabled)
"""

username = __config__.require('username')
"""
SOLIDServer API user's ID
"""

