### Type Alias

- Can be used for primitive types
- Cannot be extended.
- Union types are not supported
- Types support function.
- Type alias do not allow declaration merging
- For tuples, always use type alias

### Interface

- Cannot be used for primitive types
- Can be extended from another interface or types
- Union types are not supported
- Interface support function.
- Interface allow declaration merging
- Tuples created with interface does not handle the number of elements, it just handles types. So avoid it.
