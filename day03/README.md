##  Day 03

| Feature/Type         | Hoisted | TDZ Error | Reassignable | Redeclarable | Scope     |
|----------------------|---------|-----------|---------------|---------------|-----------|
| `var`                | ✅ Yes  | ❌ No     | ✅ Yes        | ✅ Yes        | Function  |
| `let`                | ✅ Yes  | ✅ Yes    | ✅ Yes        | ❌ No         | Block     |
| `const`              | ✅ Yes  | ✅ Yes    | ❌ No         | ❌ No         | Block     |
| Function Declaration | ✅ Yes  | ❌ No     | ✅ Yes        | ✅ Yes        | Function  |
| Function Expression  | ❌ No*  | ✅ Yes    | ✅ Yes        | ✅ Yes (if `var`) | Block (`let/const`) or Function (`var`) |
