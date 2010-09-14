
jQuery.colors helps developers manage colors through a simple, chainable color object.

It has a modular design allowing you to get rid of what you don't need or extend it for your custom ideas (and hopefully, for everyone's benefit).

# Demos and docs
[http://enideo.com/#jquery-colors](http://enideo.com/#jquery-colors)


# Developers Documentation

## RGB
* RGB is not rounded internally to prevent rounding errors, so when it has to be outputted it is always formatted through array3Octet1Nomralized

## Formats
* Every format object you add to $.colors.formats has to have a unique name and at least these three functions: toModel, fromModel and validate. The first to methods are followed by a property with the name of the model that will be generated from the original format. You can put multiple models here, but applyModelMethod will convert models through RGB if necessary.
* You don't have to validate args for toModel as some formats do, but the same method may make this convenient.

## Models
* Add functions to the $.colors.convertModels object with the following pattern: $.colors.convertModels.fromThisModel.toThisModel
* The sanitize function should also return a random output if given no arguments.


# Future work

## Formats
* rgb(%)

## Misc
* Optimise the size/speed
* qunit testing
