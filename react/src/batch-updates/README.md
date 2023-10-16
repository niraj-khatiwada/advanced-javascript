If you have multiple set states in a component and you try to set all of those state subsequently, then the states will get batched and will only trigger re-render once.
