```
[A-Z]        [A-Z]
Q0 ──────────> Q1 ──────────> Q2 (ACCEPT)
               │  \            │ \
          [_]  │   [0-9]  [_] │  [0-9]
               v        \     v       \
               Q3         └─> Q6(ACCEPT) ─> Q6 (loop [0-9])
              / \
        [A-Z]/   \[0-9]
            /     \
           v       v
      Q4(ACCEPT)  Q5(ACCEPT)
      Q4─>[A-Z]   Q5─>[0-9]
      (loop)      (loop)

```

Приймаючі стани: Q2, Q4, Q5, Q6

```
    Stan  | upper | digit | underscore | other
    ------+-------+-------+------------+------
    Q0    | Q1    | ERR   | ERR        | ERR
    Q1    | Q2    | Q6    | Q3         | ERR
    Q2    | Q2    | Q6    | Q3         | ERR
    Q3    | Q4    | Q5    | ERR        | ERR
    Q4    | Q4    | ERR   | ERR        | ERR
    Q5    | ERR   | Q5    | ERR        | ERR
    Q6    | ERR   | Q6    | ERR        | ERR
    ERR   | ERR   | ERR   | ERR        | ERR

```
