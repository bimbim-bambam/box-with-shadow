const rows = document.getElementById('rows')

const box = document.getElementById('box')

const backgroundColor = document.getElementById('backgroundColor')

const cssCode = document.getElementById('cssCode')
const cssCodeBtn = document.getElementById('cssCodeBtn')

const settingBtn = document.getElementById('settingBtn')
const shadowBtn = document.getElementById('shadowBtn')
const gitBtn = document.getElementById('gitBtn')

const shadowWorkPanel = document.getElementById('shadowWorkPanel')
const shadowSizeBtn = document.getElementById('shadowSizeBtn')
const shadowColorBtn = document.getElementById('shadowColorBtn')
const shadowBlurBtn = document.getElementById('shadowBlurBtn')
const shadowPositionBtn = document.getElementById('shadowPositionBtn')

const boxWorkPanel = document.getElementById('boxWorkPanel')
const boxSizeBtn = document.getElementById('boxSizeBtn')
const boxColorBtn = document.getElementById('boxColorBtn')
const boxRadiusBtn = document.getElementById('boxRadiusBtn')

const valuesPanel = document.getElementById('valuesPanel')

const shadowSizeValueBtn = document.getElementById('shadowSizeValueBtn')
const shadowColorValueBtn = document.getElementById('shadowColorValueBtn')
const shadowBlurValueBtn = document.getElementById('shadowBlurValueBtn')
const shadowPositionValueBtn = document.getElementById('shadowPositionValueBtn')

const boxSizeValueBtn = document.getElementById('boxSizeValueBtn')
const boxColorValueBtn = document.getElementById('boxColorValueBtn')
const boxRadiusValueBtn = document.getElementById('boxRadiusValueBtn')

const shadowColor = document.getElementById('shadowColor')

const shadowSizeX = document.getElementById('shadowSize')
const shadowBlur = document.getElementById('shadowBlur')
const shadowPositionX = document.getElementById('shadowPositionX')
const shadowPositionY = document.getElementById('shadowPositionY')

const shadowSizeRange = document.getElementById('shadowSizeRange')
const shadowBlurRange = document.getElementById('shadowBlurRange')
const shadowPositionXRange = document.getElementById('shadowPositionXRange')
const shadowPositionYRange = document.getElementById('shadowPositionYRange')

const boxColor = document.getElementById('boxColor')

const boxWidth = document.getElementById('boxWidth')
const boxHeight = document.getElementById('boxHeight')
const boxRadius = document.getElementById('boxRadius')

const boxWidthRange = document.getElementById('boxWidthRange')
const boxHeightRange = document.getElementById('boxHeightRange')
const boxRadiusRange = document.getElementById('boxRadiusRange')

// CSS CODE

cssCodeBtn.addEventListener('mouseenter', () => {
        document.getElementById("cssCodeBtn").style.borderBottom = "2px solid #514d5e";
        cssCodeBtn.style.transition = "0.5s";
        cssCodeBtn.style.transform = "scale(1.1, 1.1)"
})
cssCodeBtn.addEventListener('mouseleave', () => {
        document.getElementById("cssCodeBtn").style.borderBottom = "2px solid #37353f";
        cssCodeBtn.style.transition = "0.5s";
        cssCodeBtn.style.transform = "scale(1, 1)"
})
cssCodeBtn.addEventListener('click', () => {
        document.getElementById("cssCode").style.right = "0px";
})


// GIT BUTTON

gitBtn.addEventListener('mouseenter', () => {
        document.getElementById("gitBtn").style.borderBottom = "2px solid #514d5e";
        gitBtn.style.transition = "0.5s";
        gitBtn.style.transform = "scale(1.1, 1.1)"
})
gitBtn.addEventListener('mouseleave', () => {
        document.getElementById("gitBtn").style.borderBottom = "2px solid #37353f";
        gitBtn.style.transition = "0.5s";
        gitBtn.style.transform = "scale(1, 1)"
})


// SHADOW BUTTON

shadowBtn.addEventListener('mouseenter', () => {
        document.getElementById("shadowBtn").style.borderBottom = "3px solid rgba(0, 0, 0, 0.500)";
        document.getElementById("shadowBtn").style.color = "#d9d9d9";
        document.getElementById("shadowBtn").style.transform = "scale(1.05, 1.05)";

})
shadowBtn.addEventListener('mouseleave', () => {
        document.getElementById("shadowBtn").style.borderBottom = "3px solid rgba(0, 0, 0, 0.300)";
        document.getElementById("shadowBtn").style.color = "#c4c4c4";
        document.getElementById("shadowBtn").style.transform = "scale(1, 1)";
})


// CUSTUMIZE BOX BUTTON

settingBtn.addEventListener('mouseenter', () => {
        document.getElementById("settingBtn").style.borderBottom = "3px solid rgba(0, 0, 0, 0.500)";
        document.getElementById("settingBtn").style.color = "#d9d9d9";
        document.getElementById("settingBtn").style.transform = "scale(1.05, 1.05)";
})
settingBtn.addEventListener('mouseleave', () => {
        document.getElementById("settingBtn").style.borderBottom = "3px solid rgba(0, 0, 0, 0.300)";
        document.getElementById("settingBtn").style.color = "#c4c4c4";
        document.getElementById("settingBtn").style.transform = "scale(1, 1)";
})


// SHADOW CUSTUMIZE PANEL

shadowBtn.addEventListener('click', () => {
        document.getElementById("shadowWorkPanel").style.bottom = "0%";
        document.getElementById("boxWorkPanel").style.bottom = "-100%";
        document.getElementById("boxSizeValueBtn").style.bottom = "-100%";
        document.getElementById("boxColorValueBtn").style.bottom = "-100%";
        document.getElementById("boxRadiusValueBtn").style.bottom = "-100%";
})


// SHADOW SIZE BUTTON

shadowSizeBtn.addEventListener('mouseenter', () => {
        document.getElementById("shadowSizeBtn").style.borderBottom = "2px solid #514d5e";
        shadowSizeBtn.style.transition = "0.5s";
        shadowSizeBtn.style.transform = "scale(1.1, 1.1)"

})
shadowSizeBtn.addEventListener('mouseleave', () => {
        document.getElementById("shadowSizeBtn").style.borderBottom = "2px solid #37353f";
        shadowSizeBtn.style.transition = "0.5s";
        shadowSizeBtn.style.transform = "scale(1, 1)"

})


// SHADOW COLOR BUTTON

shadowColorBtn.addEventListener('mouseenter', () => {
        document.getElementById("shadowColorBtn").style.borderBottom = "2px solid #514d5e";
        shadowColorBtn.style.transition = "0.5s";
        shadowColorBtn.style.transform = "scale(1.1, 1.1)"
})
shadowColorBtn.addEventListener('mouseleave', () => {
        document.getElementById("shadowColorBtn").style.borderBottom = "2px solid #37353f";
        shadowColorBtn.style.transition = "0.5s";
        shadowColorBtn.style.transform = "scale(1, 1)"
})


// SHADOW BLUR BUTTON

shadowBlurBtn.addEventListener('mouseenter', () => {
        document.getElementById("shadowBlurBtn").style.borderBottom = "2px solid #514d5e";
        shadowBlurBtn.style.transition = "0.5s";
        shadowBlurBtn.style.transform = "scale(1.1, 1.1)"
})
shadowBlurBtn.addEventListener('mouseleave', () => {
        document.getElementById("shadowBlurBtn").style.borderBottom = "2px solid #37353f";
        shadowBlurBtn.style.transition = "0.5s";
        shadowBlurBtn.style.transform = "scale(1, 1)"
})


// SHADOW POSITION BUTTON

shadowPositionBtn.addEventListener('mouseenter', () => {
        document.getElementById("shadowPositionBtn").style.borderBottom = "2px solid #514d5e";
        shadowPositionBtn.style.transition = "0.5s";
        shadowPositionBtn.style.transform = "scale(1.1, 1.1)"
})
shadowPositionBtn.addEventListener('mouseleave', () => {
        document.getElementById("shadowPositionBtn").style.borderBottom = "2px solid #37353f";
        shadowPositionBtn.style.transition = "0.5s";
        shadowPositionBtn.style.transform = "scale(1, 1)"
})


// BOX SETTINGS PANEL

settingBtn.addEventListener('click', () => {
        document.getElementById("boxWorkPanel").style.bottom = "0%";
        document.getElementById("shadowWorkPanel").style.bottom = "-100%";
        document.getElementById("shadowSizeValueBtn").style.bottom = "-100%";
        document.getElementById("shadowColorValueBtn").style.bottom = "-100%";
        document.getElementById("shadowBlurValueBtn").style.bottom = "-100%";
        document.getElementById("shadowPositionValueBtn").style.bottom = "-100%";
})


// BOX SIZE BUTTON

boxSizeBtn.addEventListener('mouseenter', () => {
        document.getElementById("boxSizeBtn").style.borderBottom = "2px solid #514d5e";
        boxSizeBtn.style.transition = "0.5s";
        boxSizeBtn.style.transform = "scale(1.1, 1.1)"
})
boxSizeBtn.addEventListener('mouseleave', () => {
        document.getElementById("boxSizeBtn").style.borderBottom = "2px solid #37353f";
        boxSizeBtn.style.transition = "0.5s";
        boxSizeBtn.style.transform = "scale(1, 1)"
})


// BOX COLOR BUTTON

boxColorBtn.addEventListener('mouseenter', () => {
        document.getElementById("boxColorBtn").style.borderBottom = "2px solid #514d5e";
        boxColorBtn.style.transition = "0.5s";
        boxColorBtn.style.transform = "scale(1.1, 1.1)"
})
boxColorBtn.addEventListener('mouseleave', () => {
        document.getElementById("boxColorBtn").style.borderBottom = "2px solid #37353f";
        boxColorBtn.style.transition = "0.5s";
        boxColorBtn.style.transform = "scale(1, 1)"
})


// BOX RADIUS BUTTON

boxRadiusBtn.addEventListener('mouseenter', () => {
        document.getElementById("boxRadiusBtn").style.borderBottom = "2px solid #514d5e";
        boxRadiusBtn.style.transition = "0.5s";
        boxRadiusBtn.style.transform = "scale(1.1, 1.1)"
})
boxRadiusBtn.addEventListener('mouseleave', () => {
        document.getElementById("boxRadiusBtn").style.borderBottom = "2px solid #37353f";
        boxRadiusBtn.style.transition = "0.5s";
        boxRadiusBtn.style.transform = "scale(1, 1)"
})


// SHADOW PANEL BUTTONS ANIMATIONS

shadowSizeBtn.addEventListener('click', () => {
        document.getElementById("shadowSizeValueBtn").style.bottom = "-100%";
        document.getElementById("shadowColorValueBtn").style.bottom = "-100%";
        document.getElementById("shadowBlurValueBtn").style.bottom = "-100%";
        document.getElementById("shadowPositionValueBtn").style.bottom = "-100%";

        document.getElementById("shadowSizeValueBtn").style.visibility = "visible";
        document.getElementById("shadowColorValueBtn").style.visibility = "hidden";
        document.getElementById("shadowBlurValueBtn").style.visibility = "hidden";
        document.getElementById("shadowPositionValueBtn").style.visibility = "hidden";

        document.getElementById("shadowSizeValueBtn").style.bottom = "60px";
})
shadowColorBtn.addEventListener('click', () => {
        document.getElementById("shadowSizeValueBtn").style.bottom = "-100%";
        document.getElementById("shadowColorValueBtn").style.bottom = "-100%";
        document.getElementById("shadowBlurValueBtn").style.bottom = "-100%";
        document.getElementById("shadowPositionValueBtn").style.bottom = "-100%";

        document.getElementById("shadowSizeValueBtn").style.visibility = "hidden";
        document.getElementById("shadowColorValueBtn").style.visibility = "visible";
        document.getElementById("shadowBlurValueBtn").style.visibility = "hidden";
        document.getElementById("shadowPositionValueBtn").style.visibility = "hidden";

        document.getElementById("shadowColorValueBtn").style.bottom = "60px";
})
shadowBlurBtn.addEventListener('click', () => {
        document.getElementById("shadowSizeValueBtn").style.bottom = "-100%";
        document.getElementById("shadowColorValueBtn").style.bottom = "-100%";
        document.getElementById("shadowBlurValueBtn").style.bottom = "-100%";
        document.getElementById("shadowPositionValueBtn").style.bottom = "-100%";

        document.getElementById("shadowSizeValueBtn").style.visibility = "hidden";
        document.getElementById("shadowColorValueBtn").style.visibility = "hidden";
        document.getElementById("shadowBlurValueBtn").style.visibility = "visible";
        document.getElementById("shadowPositionValueBtn").style.visibility = "hidden";

        document.getElementById("shadowBlurValueBtn").style.bottom = "60px";
})
shadowPositionBtn.addEventListener('click', () => {
        document.getElementById("shadowSizeValueBtn").style.bottom = "-100%";
        document.getElementById("shadowColorValueBtn").style.bottom = "-100%";
        document.getElementById("shadowBlurValueBtn").style.bottom = "-100%";
        document.getElementById("shadowPositionValueBtn").style.bottom = "-100%";

        document.getElementById("shadowSizeValueBtn").style.visibility = "hidden";
        document.getElementById("shadowColorValueBtn").style.visibility = "hidden";
        document.getElementById("shadowBlurValueBtn").style.visibility = "hidden";
        document.getElementById("shadowPositionValueBtn").style.visibility = "visible";

        document.getElementById("shadowPositionValueBtn").style.bottom = "60px";
})


// BOX PANEL BUTTONS ANIMATIONS

boxSizeBtn.addEventListener('click', () => {
        document.getElementById("boxSizeValueBtn").style.bottom = "-100%";
        document.getElementById("boxColorValueBtn").style.bottom = "-100%";
        document.getElementById("boxRadiusValueBtn").style.bottom = "-100%";

        document.getElementById("boxSizeValueBtn").style.visibility = "visible";
        document.getElementById("boxColorValueBtn").style.visibility = "hidden";
        document.getElementById("boxRadiusValueBtn").style.visibility = "hidden";

        document.getElementById("boxSizeValueBtn").style.bottom = "60px";
})
boxColorBtn.addEventListener('click', () => {
        document.getElementById("boxSizeValueBtn").style.bottom = "-100%";
        document.getElementById("boxColorValueBtn").style.bottom = "-100%";
        document.getElementById("boxRadiusValueBtn").style.bottom = "-100%";

        document.getElementById("boxSizeValueBtn").style.visibility = "hidden";
        document.getElementById("boxColorValueBtn").style.visibility = "visible";
        document.getElementById("boxRadiusValueBtn").style.visibility = "hidden";

        document.getElementById("boxColorValueBtn").style.bottom = "60px";
})
boxRadiusBtn.addEventListener('click', () => {
        document.getElementById("boxSizeValueBtn").style.bottom = "-100%";
        document.getElementById("boxColorValueBtn").style.bottom = "-100%";
        document.getElementById("boxRadiusValueBtn").style.bottom = "-100%";

        document.getElementById("boxSizeValueBtn").style.visibility = "hidden";
        document.getElementById("boxColorValueBtn").style.visibility = "hidden";
        document.getElementById("boxRadiusValueBtn").style.visibility = "visible";

        document.getElementById("boxRadiusValueBtn").style.bottom = "60px";
})


// FUNCTIONAL

// BOX COLOR

boxColor.addEventListener("input", (event) => 
{
    box.style.backgroundColor = event.target.value;
});

boxColor.addEventListener("mouseenter", () =>
{
    boxColor.style.transition = "0.5s";
    boxColor.style.transform = "scale(1.1, 1.1)"
    boxColor.style.opacity = "0.95";
});

boxColor.addEventListener("mouseleave", () =>
{
    boxColor.style.transition = "0.5s";
    boxColor.style.transform = "scale(1, 1)";
});


// BACKGROUND COLOR

backgroundColor.addEventListener("input", (event) => 
{
    rows.style.backgroundColor = event.target.value;
});

backgroundColor.addEventListener("mouseenter", () =>
{
    backgroundColor.style.transition = "0.5s";
    backgroundColor.style.transform = "scale(1.1, 1.1)"
    backgroundColor.style.opacity = "0.95";
});

backgroundColor.addEventListener("mouseleave", () =>
{
    backgroundColor.style.transition = "0.5s";
    backgroundColor.style.transform = "scale(1, 1)";
});


// BOX WIDTH

function updateWidthInput()
{
        boxWidthRange.value = boxWidth.value;
        const widthVal = boxWidth.value || boxWidthRange.value;
        box.style.width = widthVal + 'px';
        updateCSSCode();
}
function updateWidthRange()
{
        boxWidth.value = boxWidthRange.value;
        const widthVal = boxWidth.value || boxWidthRange.value;
        box.style.width = widthVal + 'px';
        updateCSSCode();
}
boxWidth.addEventListener("input", updateWidthInput);
boxWidthRange.addEventListener("input", updateWidthRange);


// BOX HEIGHT

function updateHeightInput()
{
        boxHeightRange.value = boxHeight.value
        const heightVal = boxHeight.value || boxHeightRange.value;
        box.style.height = heightVal + 'px';
        updateCSSCode();
}
function updateHeightRange()
{
        boxHeight.value = boxHeightRange.value
        const heightVal = boxHeight.value || boxHeightRange.value;
        box.style.height = heightVal + 'px';
        updateCSSCode();
}
boxHeight.addEventListener("input", updateHeightInput);
boxHeightRange.addEventListener("input", updateHeightRange);


// BOX RADIUS

function updateRadiusInput()
{
        boxRadiusRange.value = boxRadius.value;
        const radiusVal = boxRadius.value || boxRadiusRange.value;
        box.style.borderRadius = radiusVal + '%';
        updateCSSCode();
}
function updateRadiusRange()
{
        boxRadius.value = boxRadiusRange.value;
        const radiusVal = boxRadius.value || boxRadiusRange.value;
        box.style.borderRadius = radiusVal + '%';
        updateCSSCode();
}
boxRadius.addEventListener("input", updateRadiusInput);
boxRadiusRange.addEventListener("input", updateRadiusRange);


// SHADOW POSITION X

function updateX()
{
    shadowPositionXRange.value = shadowPositionX.value;
    const xVal = shadowPositionX.value || shadowPositionXRange.value;
    box.style.boxShadow = `${xVal}% ${shadowPositionY.value}% ${shadowBlur.value}% ${shadowSize.value}% 
    ${shadowColor.value}`;
    updateCSSCode();
}

function updateXrange()
{
    shadowPositionX.value = shadowPositionXRange.value;
    const xVal = shadowPositionX.value || shadowPositionXRange.value;
    box.style.boxShadow = `${xVal}% ${shadowPositionYRange.value}% ${shadowBlurRange.value}% 
    ${shadowSizeRange.value}% ${shadowColor.value}`;
    updateCSSCode();
}

shadowPositionX.addEventListener("input", updateX);
shadowPositionXRange.addEventListener("input", updateXrange);


// SHADOW POSITION Y

function updateY()
{
    shadowPositionYRange.value = shadowPositionY.value;
    const yVal = shadowPositionY.value || shadowPositionYRange.value;
    box.style.boxShadow = `${shadowPositionX.value}% ${yVal}% ${shadowBlur.value}% ${shadowSize.value}% 
    ${shadowColor.value}`;
    updateCSSCode();
}

function updateYrange()
{
    shadowPositionY.value = shadowPositionYRange.value;
    const yVal = shadowPositionY.value || shadowPositionYRange.value;
    box.style.boxShadow = `${shadowPositionX.value}% ${yVal}% ${shadowBlurRange.value}% 
    ${shadowSizeRange.value}% ${shadowColor.value}`;
    updateCSSCode();
}

shadowPositionY.addEventListener("input", updateY);
shadowPositionYRange.addEventListener("input", updateYrange);


// SHADOW BLUR

function updateBlur()
{
    shadowBlurRange.value = shadowBlur.value;
    const blurVal = shadowBlur.value || shadowBlurRange.value;
    box.style.boxShadow = `${shadowPositionX.value}% ${shadowPositionY.value}% ${blurVal}% ${shadowSize.value}% 
    ${shadowColor.value}`;
    updateCSSCode();
}

function updateBlurRange()
{
    shadowBlur.value = shadowBlurRange.value;
    const blurVal = shadowBlur.value || shadowBlurRange.value;
    box.style.boxShadow = `${shadowPositionX.value}% ${shadowPositionYRange.value}% ${blurVal}% 
    ${shadowSizeRange.value}% ${shadowColor.value}`;
    updateCSSCode();
}

shadowBlur.addEventListener("input", updateBlur);
shadowBlurRange.addEventListener("input", updateBlurRange);


// Shadow Spread
function updateSize()
{
    shadowSizeRange.value = shadowSize.value;
    const spreadVal = shadowSize.value || shadowSizeRange.value;
    box.style.boxShadow = `${shadowPositionX.value}% ${shadowPositionY.value}% ${shadowBlur.value}% ${spreadVal}% 
    ${shadowColor.value}`;
    updateCSSCode();
}

function updateSizeRange()
{
    shadowSize.value = shadowSizeRange.value;
    const spreadVal = shadowSize.value || shadowSizeRange.value;
    box.style.boxShadow = `${shadowPositionX.value}% ${shadowPositionYRange.value}% ${shadowBlurRange.value}% 
    ${spreadVal}% ${shadowColor.value}`;
    updateCSSCode();
}

shadowSize.addEventListener("input", updateSize);
shadowSizeRange.addEventListener("input", updateSizeRange);


// Shadow active and inset
let isShadowEnabled = true;
let isInset = false;

// Функция для обновления тени
function updateShadow() {
    if (isShadowEnabled) {
        const inset = isInset ? 'inset ' : '';
        box.style.boxShadow = `${inset}${shadowPositionX.value || shadowPositionXRange.value}px 
        ${shadowPositionY.value || shadowPositionYRange.value}px 
        ${shadowBlur.value || shadowBlurRange.value}px 
        ${shadowSize.value || shadowSizeRange.value}px ${shadowColor.value}`;
    } else {
        box.style.boxShadow = 'none';
    }
    updateCSSCode();
}

// Функция для обработки нажатия на кнопку "active"
function toggleShadow() {
        isShadowEnabled = !isShadowEnabled;
        updateShadow();
        updateCSSCode();
}

// Функция для обработки нажатия на кнопку "inset"
function toggleInset() {
    isInset = !isInset;
    updateShadow();
    updateCSSCode();
}

// Привязываем обновление тени к изменению параметров тени
shadowPositionX.addEventListener("input", updateShadow);
shadowPositionY.addEventListener("input", updateShadow);
shadowBlur.addEventListener("input", updateShadow);
shadowSize.addEventListener("input", updateShadow);
shadowPositionXRange.addEventListener("input", updateShadow);
shadowPositionYRange.addEventListener("input", updateShadow);
shadowBlurRange.addEventListener("input", updateShadow);
shadowSizeRange.addEventListener("input", updateShadow);
shadowColor.addEventListener("input", updateShadow);

// Привязываем функции к кнопкам "active" и "inset"
activeInput.addEventListener("change", toggleShadow);
insetInput.addEventListener("change", toggleInset);





function updateCSSCode() {
        const cssCode = 
`
    .box {
        width: ${box.style.width};
        height: ${box.style.height};
        border-radius: ${box.style.borderRadius};
        background-color: ${box.style.backgroundColor};
        border-color: ${box.style.borderColor};
        box-shadow: ${box.style.boxShadow};
    }
        `;
        document.getElementById("cssCode").textContent = cssCode;
    }
    
    updateCSSCode();


