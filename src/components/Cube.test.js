import ReactThreeTestRenderer from '@react-three/test-renderer'
import { render } from '@testing-library/react'
import { Cube } from './Cube'

test("mesh to have two children", async () => {
    const renderer = await ReactThreeTestRenderer.create(<Cube />)
    const mesh = renderer.scene.children[0].allChildren
    expect(mesh.length).toBe(2)

})


test("Cube to have color blue", async () => {
    const renderer = await ReactThreeTestRenderer.create(<Cube />)
    const serachByColor = renderer.scene.findAll(
        (node) => node.props.color === "royalblue"
    )
    expect(serachByColor.length).toBe(1)
})

test("Click event makes cube bigger", async () => {
    const renderer = await ReactThreeTestRenderer.create(<Cube />)
    const mesh = renderer.scene.children[0]
    expect(mesh.props.scale).toBe(2)
    await renderer.fireEvent(mesh,"click")
    expect(mesh.props.scale).toBe(4)
})