player.onChat("fence", function () {
    agent.teleportToPlayer()
    agent.setItem(SPRUCE_FENCE, 33, 1)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 4; index++) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 8)
    }
    agent.move(FORWARD, 1)
})
