# dynamo-logos

~ 1 component for all
    ~ categories: abstract, brand, word, letter, pictorial, marscot, combination, emblem
    ~ color: any color name, hax code or rgba
    ~ name: return random svg item
    ~

<DynamoLogos />
{Array(10).map((item, index) => (
    <DynamoLogos key={index} category="abstract" color="black" name="logo1" />
))}

const test = ['svg1', 'svg2', 'svg3'];
const randomItem = test[Math.floor(Math.random() * test.length)];
