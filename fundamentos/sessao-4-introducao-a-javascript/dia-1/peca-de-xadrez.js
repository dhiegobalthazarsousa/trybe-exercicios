let pieces = 'queEn';
pieces = pieces.toLowerCase();

switch (pieces) {
    case 'pawn':
        console.log(pieces + " (Peão) => Vertical Foward moviment (Movimento vertical para frente)");        
        break;
    case 'bishop':
        console.log(pieces + ' (Bispo) => Diagonals (Diagonais)');
        break;
    case 'knight':
        console.log(pieces + ' (Cavalo) => L movement (Movimento em L)');
        break;
    case 'rook':
        console.log(pieces + ' (Torre) => Horizontal and Vertical movement (Movimento horizontal e vertical)');
        break;
    case 'queen':
        console.log(pieces + ' (Rainha) => Free movement to any place! (Livre para qualquer lugar');
        break;
    case 'king':
        console.log(pieces + ' (Rei) => Free movement to any place, but 1 space (Livre para qualquer lugar, mas apenas um espaço)');
        break;
    default:
        console.log('Peça inválida!');
        break;
}