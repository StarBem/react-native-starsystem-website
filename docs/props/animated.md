### `animation`

Name of the animation, see below for available animations.

| Prop            | Description                                                | Default |
| --------------- | ---------------------------------------------------------- | ------- |
| **`animation`** | Name of the animation, see below for available animations. | _None_  |

---

### `duration`

For how long the animation will run (milliseconds).

|  Type  | Default |
| :----: | :-----: |
| number |  1000   |

---

### `delay`

Optionally delay animation (milliseconds).

|  Type  | Default |
| :----: | :-----: |
| number |    0    |

---

### `direction`

Allows inset to be applied to a specific direction. `middle` applies inset in both directions. The `inset` prop must be true for this to apply.

|                     Type                      | Default |
| :-------------------------------------------: | :-----: |
| normal, reverse, alternate, alternate-reverse | normal  |

---

### `easing`

#### Available easings

Style of the divider

|     Prop     |                                                                                                                                                                                                                                                                                 Description                                                                                                                                                                                                                                                                                  | Default |
| :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| **`easing`** | Timing function for the animation. Valid values: custom function or `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `ease-in-cubic`, `ease-out-cubic`, `ease-in-out-cubic`, `ease-in-circ`, `ease-out-circ`, `ease-in-out-circ`, `ease-in-expo`, `ease-out-expo`, `ease-in-out-expo`, `ease-in-quad`, `ease-out-quad`, `ease-in-out-quad`, `ease-in-quart`, `ease-out-quart`, `ease-in-out-quart`, `ease-in-quint`, `ease-out-quint`, `ease-in-out-quint`, `ease-in-sine`, `ease-out-sine`, `ease-in-out-sine`, `ease-in-back`, `ease-out-back`, `ease-in-out-back`. | `ease`  |

---

### `useNativeDriver`

Whether to use native or JavaScript animation driver. Native driver can help with performance but cannot handle all types of styling.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

## `AnimatableExplorer` example

![Animatable Explorer](https://user-images.githubusercontent.com/378279/36341974-f697e5d8-13f6-11e8-8e2a-21d8c2a4b340.gif)

## Animations

Animations are heavily inspired by [Animated.css](https://daneden.github.io/animate.css/).

### Attention Seekers

![animatable-attention](https://cloud.githubusercontent.com/assets/378279/10590307/ef73b1ba-767d-11e5-8fb9-9779d3a53a50.gif)

- `bounce`
- `flash`
- `jello`
- `pulse`
- `rotate`
- `rubberBand`
- `shake`
- `swing`
- `tada`
- `wobble`

### Bouncing Entrances

![animatable-bouncein](https://cloud.githubusercontent.com/assets/378279/10590306/ef572bbc-767d-11e5-8440-8e61d401537a.gif)

- `bounceIn`
- `bounceInDown`
- `bounceInUp`
- `bounceInLeft`
- `bounceInRight`

### Bouncing Exits

![animatable-bounceout](https://cloud.githubusercontent.com/assets/378279/10590305/ef56e4cc-767d-11e5-9562-6cd3210faf34.gif)

- `bounceOut`
- `bounceOutDown`
- `bounceOutUp`
- `bounceOutLeft`
- `bounceOutRight`

### Fading Entrances

![animatable-fadein](https://cloud.githubusercontent.com/assets/378279/10590304/ef4f09b4-767d-11e5-9a43-06e97e8ee2c1.gif)

- `fadeIn`
- `fadeInDown`
- `fadeInDownBig`
- `fadeInUp`
- `fadeInUpBig`
- `fadeInLeft`
- `fadeInLeftBig`
- `fadeInRight`
- `fadeInRightBig`

### Fading Exits

![animatable-fadeout](https://cloud.githubusercontent.com/assets/378279/10590303/ef3e9598-767d-11e5-83bc-bd48d6017131.gif)

- `fadeOut`
- `fadeOutDown`
- `fadeOutDownBig`
- `fadeOutUp`
- `fadeOutUpBig`
- `fadeOutLeft`
- `fadeOutLeftBig`
- `fadeOutRight`
- `fadeOutRightBig`

### Flippers

![animatable-flip](https://cloud.githubusercontent.com/assets/378279/10590296/ef3076ca-767d-11e5-9f62-6b9c696dad51.gif)

- `flipInX`
- `flipInY`
- `flipOutX`
- `flipOutY`

### Lightspeed

![animatable-lightspeed](https://cloud.githubusercontent.com/assets/378279/10590301/ef374c8e-767d-11e5-83ad-b249d2731f43.gif)

- `lightSpeedIn`
- `lightSpeedOut`

### Sliding Entrances

![animatable-slidein](https://cloud.githubusercontent.com/assets/378279/10590300/ef36dfe2-767d-11e5-932b-1cccce78087b.gif)

- `slideInDown`
- `slideInUp`
- `slideInLeft`
- `slideInRight`

### Sliding Exits

![animatable-slideout](https://cloud.githubusercontent.com/assets/378279/10590299/ef35a3ca-767d-11e5-94e0-441fd49b6444.gif)

- `slideOutDown`
- `slideOutUp`
- `slideOutLeft`
- `slideOutRight`

### Zooming Entrances

![animatable-zoomin](https://cloud.githubusercontent.com/assets/378279/10590302/ef37d438-767d-11e5-8480-a212e21c2192.gif)

- `zoomIn`
- `zoomInDown`
- `zoomInUp`
- `zoomInLeft`
- `zoomInRight`

### Zooming Exits

![animatable-zoomout](https://cloud.githubusercontent.com/assets/378279/10590298/ef33fa52-767d-11e5-80fe-6b8dbb5e53d0.gif)

- `zoomOut`
- `zoomOutDown`
- `zoomOutUp`
- `zoomOutLeft`
- `zoomOutRight`
