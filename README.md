[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Direction Editor for Neos CMS

This package provides a small editor to set directions. Useful for settings animation directions.

If `center` is set, the value is an empty string.

Example:

```yaml
'Foo.Bar:Element':
  properties:
    direction:
      type: string
      ui:
        inspector:
          editor: 'Carbon.DirectionEditor/Editor'
          editorOptions:
            propertyMapping: false
            north: true
            east: true
            south: true
            west: true
            northEast: true
            northWest: true
            southEast: true
            southWest: true
            center: 'If it is a string, it used as label'
            disabled: false
```

You can change the saved values if you alter the `propertyMapping`:

```yaml
'Foo.Bar:Element':
  properties:
    direction:
      type: string
      ui:
        inspector:
          editor: 'Carbon.DirectionEditor/Editor'
          editorOptions:
            propertyMapping:
              north: top
              south: bottom
```

In the example above, `north` will get saved as `top` and `south` as `bottom`

[packagist]: https://packagist.org/packages/carbon/directioneditor
[latest stable version]: https://poser.pugx.org/carbon/directioneditor/v/stable
[total downloads]: https://poser.pugx.org/carbon/directioneditor/downloads
[license]: https://poser.pugx.org/carbon/directioneditor/license
[github forks]: https://img.shields.io/github/forks/CarbonPackages/Carbon.DirectionEditor.svg?style=social&label=Fork
[github stars]: https://img.shields.io/github/stars/CarbonPackages/Carbon.DirectionEditor.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/CarbonPackages/Carbon.DirectionEditor.svg?style=social&label=Watch
[fork]: https://github.com/CarbonPackages/Carbon.DirectionEditor/fork
[stargazers]: https://github.com/CarbonPackages/Carbon.DirectionEditor/stargazers
[subscription]: https://github.com/CarbonPackages/Carbon.DirectionEditor/subscription
