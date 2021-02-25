# elastic-words

This program stretches out a word, with the minimum expansion at the ends, and the maximum 
expansion in the center. For example:

```
elasticize("ANNA") ➞ "ANNNNA"

elasticize("KAYAK") ➞ "KAAYYYAAK"
```

A word of length less than three can't be stretched, and is returned as it is.