purple = {0.8, 0.05, 0.8}

function love.draw()
    if love.mouse.isDown(1) then
        love.graphics.setColor(purple)
        local x, y = love.mouse.getPosition()
        drawSquare(x, y, 30)
    end
end

function drawSquare(x, y, size)
    local center_x = x - size / 2
    local center_y = y - size / 2

    love.graphics.rectangle(
        "fill", center_x, center_y, size, size
    )
end
