### Type Alias

- Can be used for primitive types
- Cannot be extended. We can use intersection though.
- Union types are supported
- Types support function.
- Type alias do not allow declaration merging
- For tuples, always use type alias
- Both support generics

### Interface

- Cannot be used for primitive types
- Can be extended from another interface or types
- Union types are not supported
- Interface also supports function.
- Interface allow declaration merging
- Tuples created with interface does not handle the number of elements, it just handles types. So avoid it.
- Both support generics
