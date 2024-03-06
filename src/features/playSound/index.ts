export const playSound = (): void => {
	const audio = new Audio('/todo-list/sounds/1.mp3')
	audio.volume = 0.3
	audio.play()
}
