import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* 
        ///////////////////
            CSS RESET
        ///////////////////
    */
    *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
            all: unset;
            display: revert;
        }

        /* Preferred box-sizing value */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        /* Reapply the pointer cursor for anchor tags */
        a, button {
            cursor: revert;
        }

        /* Remove list styles (bullets/numbers) */
        ol, ul, menu {
            list-style: none;
        }

        /* For images to not be able to exceed their container */
        img {
            max-inline-size: 100%;
            max-block-size: 100%;
        }

        /* removes spacing between cells in tables */
        table {
            border-collapse: collapse;
        }

        /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
        input, textarea {
            -webkit-user-select: auto;
        }

        /* revert the 'white-space' property for textarea elements on Safari */
        textarea {
            white-space: revert;
        }

        /* minimum style to allow to style meter element */
        meter {
            -webkit-appearance: revert;
            appearance: revert;
        }

        /* preformatted text - use only for this feature */
        pre {
            all: revert;
        }

        /* reset default text opacity of input placeholder */
        ::placeholder {
            color: unset;
        }

        /* remove default dot (•) sign */
        ::marker {
            content: "";
        }

        /* fix the feature of 'hidden' attribute.
        display:revert; revert to element instead of attribute */
        :where([hidden]) {
            display: none;
        }

        /* revert for bug in Chromium browsers
        - fix for the content editable attribute will work properly.
        - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
        :where([contenteditable]:not([contenteditable="false"])) {
            -moz-user-modify: read-write;
            -webkit-user-modify: read-write;
            overflow-wrap: break-word;
            -webkit-line-break: after-white-space;
            -webkit-user-select: auto;
        }

        /* apply back the draggable feature - exist only in Chromium and Safari */
        :where([draggable="true"]) {
            -webkit-user-drag: element;
        }

        /* Revert Modal native behavior */
        :where(dialog:modal) {
            all: revert;
        }

        *, body{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            outline: none;
        }

    :root {
        --primary-color: #1E96FC;
        --primary-disabled: rgba(50, 50, 50, 0.05);
        --yellow-color: #FFFA69;
        --yellow-dark-color: #FFF71B;
        --red-color: #FF5E67;
        --red-dark-color: #FE4B56;
        --green-color: #37F589;
        --orange-color: #FF9B26;
        --light-blue-color: #65C8FF;
        --dark-color: #323232;
        --light-color: #FFFFFF;
        --transparent-white-color: rgba(255, 255, 255, 0.45);
        --font-texts: 'Open Sans', sans-serif;
        --font-titles: 'Montserrat Alternates', sans-serif;
        --backdrop-color: rgba(29, 29, 29, 0.76);
    }
    *, html, body{
            font-family: var(--font-texts);
    }
`;

export default GlobalStyles;
