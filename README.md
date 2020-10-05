# ceasar


$ git clone *этот репозиторий*
потом
$ cd ceasar
для запуска приложения используйте: $ npm install








Доступные команды для проверки задания

$ node my_caesar_cli *option*
Option:
$ -s or --shift номер*  // 
$ -a or --action *encode/decode* //требуемая опция
$ -o or --output *путь к создаваемому файлу*
$ -i or --input *путь к создаваемому файлу*
Примеры команд:
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt

Для выхода из приложения нажмите контрол+с