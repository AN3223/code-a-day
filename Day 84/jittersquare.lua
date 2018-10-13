math = require("math")

purple = {0.8, 0.05, 0.8}
shift = 4

function love.draw()
    if love.mouse.isDown(1) then
        love.graphics.setColor(purple)

        local x, y = love.mouse.getPosition()

        if math.random() < 0.25 then
            x = x + shift
        end
        drawSquare(x, y, 30)
        shift = -shift
    end
end

function drawSquare(x, y, size)
    local center_x = x - size / 2
    local center_y = y - size / 2

    love.graphics.rectangle(
        "fill", center_x, center_y, size, size
    )
end
