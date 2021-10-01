---
id: contentBox
title: ContentBox
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/contentBox.md'

ContentBox is a base component for making fixed lightboxes at the bottom of the page.

<img src={useBaseUrl('img/contentBox.png')} alt="Bottom Sheet Component" />

## Usage

```js
import { View } from "react-native";
import { ContentBox, Text, Button } from "react-native-starsystem";

const Example = () => {
  return (
    <View style={{ flex: 1 }}>
      <ContentBox
        topContent={<Text h2>Go to Login</Text>}
        centerContent={
          <Text>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </Text>
        }
        bottomContent={<Button title="Ok, Vamos" variant="secondary" />}
      />
    </View>
  );
};
```

---

<Props />

---
