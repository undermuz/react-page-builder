# @undermuz/react-page-builder

(⚠️⚠️⚠️ THIS PACKAGE IS UNDER DEVELOPING ⚠️⚠️⚠️)

React library to make Ui-Blocks with JSON, and fill it by generated edit-form

[NPM: react-page-builder](https://www.npmjs.com/package/@undermuz/react-page-builder)

## Install

`npm i -S @undermuz/react-page-builder`

## Update

`npm update @undermuz/react-page-builder`

## Basic usage

```javascript

    // Blocks with editor
    import BlocksEditor from "@undermuz/react-page-builder/blocks-editor/"

    // Editor theme
    import ChakraUi from "@undermuz/react-json-form/themes/chakra"

    // Blocks library
    import Offer1 from "@undermuz/grommet-block-templates/offer/1"
    import Feature1 from "@undermuz/grommet-block-templates/features/1"
    import Price1 from "@undermuz/grommet-block-templates/prices/1"
    import Price2 from "@undermuz/grommet-block-templates/prices/2"
    import GridText1 from "@undermuz/grommet-block-templates/grid-text/1"

    const library: IBlock[] = [Offer1, Feature1, Price1, Price2, GridText1]

    // Page
    const Page (props) => {
        const [value, setValue] = useState<IBlockResultValue[]>([])

        return
            <BlocksEditor
                editFormTheme={ChakraUi}
                library={library}
                value={value}
                onChange={(v) => setValue(v)}
            />
    }
```

## Examples

[Storybook](https://undermuz.github.io/react-page-builder)
