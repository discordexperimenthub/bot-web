import { onMounted } from "vue";

export function mouseImageHoverEffect(id: string) {
    onMounted(() => {
        const element = document.getElementById(id);
        if(element !== null) {
            element.addEventListener('mousemove', (mouseEvent) => {
                const positionX = mouseEvent.clientX;
                const positionY = mouseEvent.clientY;
                element.style.setProperty('--image-y', `${positionY}`)
                element.style.setProperty('--image-x', `${positionX}`)
                element.classList.add('imageHoverEffect');
            })
        }
    })
}