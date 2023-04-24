# Changelog

## `0.7.7`

Updates repo URL in package.json for new organization

## `0.7.6`

Adds tracking for AclID

## `0.7.5`

Removes extra request to `/internal/pixel` through public domain. Only api. request is performed now.

## `0.7.4`

Changes `factorialhr.com` domain by `api.factorialhr.com`

## `0.7.3`

Add tracking for Google Click ID

## `0.7.2`

Do not trigger 2 pixels when origin domain is the same as config domain

## `0.7.1`

Pick custom domain from script tag data-domain attribute. This way the config is centralized.

## `0.7.0`

Print 2 cookies pixels. One in country domain as always like for example `factorial.fr` and the other
on `factorialhr.com` main domain.

## `0.6.0`

Use relative url instead of a host.

## `0.5.0`

Encode some urls.

## `0.4.0`

Revert `0.3.0` and point to the current host instead.

## `0.3.0`

Change url to always point to `api.factorialhr.com`

## `0.2.3`

Invisible pixel

## `0.2.2`

Prettier pixel

## `0.2.1`

Fixed relative url

## `0.2.0`

Now the pixel is a real pixel.
And it only works within the same domain.

## `0.1.1`

Made pixel auto execute on dom loaded + hardcoded host

## `0.1.0`

First version
