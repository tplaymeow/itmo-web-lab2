class ValidationService {
    isValidCoordinates(coordinates) {
        return (coordinates.x in [-4, -3, -2, -1, 0, 1, 2, 3, 4])
            && (-5 <= coordinates.y && coordinates.y <= 5)
            && (coordinates.r in [1.0, 1.5, 2.0, 2.5, 3.0])
    }
}