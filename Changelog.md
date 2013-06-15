# Change Log

## 0.2.0
- Updated to support promises or callbacks for all API methods
- Major refactoring to support API methods as Traits (makes maintaining end points easier)
- Expanded test coverage to cover all the exposed API methods (including promises and callbacks)
- Change to http promise invocation to support Trait end points

- ``locateBridges()`` replaced with Phillips API backend call for increased speed
- original 0.1.x version of ``locateBridges()`` changed to ``searchForBridges()``
-

- Removed the groupId from ``setLightState()`` and introduced a ``setGroupLightState()`` function to support groups


## 0.1.4
- Working version of API with support for Phillips Hue Bridge Firmware 1.0
- Schedules support implemented
- Works with promises only