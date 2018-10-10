show_square = false
square_x = 0
square_y = 0

function love.mousepressed(x, y)
    square_x = x
    square_y = y
    show_square = true
end

function love.mousereleased()
    show_square = false
end

function love.draw()
    if show_square then
        drawSquare(square_x, square_y, 30)
    end
end

function drawSquare(x, y, size)
    local center_x = x - size / 2
    local center_y = y - size / 2

    love.graphics.rectangle(
        "fill", center_x, center_y, size, size
    )
end
