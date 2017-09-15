# node_random_string

Node.js command line tool to generate random string.

## Install

```
npm install -g node_random_string_cli
```

### Usage

```
myRandomString [options] [command]

```

### Options

  * -V, --version ouput the version number
  * -h, --help    output usage information

### Commands

  * uuid	Generate uuid string
  * hex     Generate hex random string
     * -b, --bytes The bytes of hex. Deafult is 16.

  * hex_array Generate hex array. Ex: { 0x01, 0xab, 0x3a }
     * -b, --bytes The bytes of hex. Default is 16.

  * string  Generate secure random string
     * -l, --length The length of string. Default is 16

## Example

```
myRandomString uuid
/// 92f6cd68900045719d98178f67926947

myRandomString hex
/// 8cbfa462ba6f90864a6d7767aefe60bf

myRandomString hex -b 32
/// b5ac9f9a6b9834b0b7a1fd2b896a2bf95ca081b55c979e321401ee5a4f586392

myRandomString hex_array
/// { 0x33, 0x77, 0xA8, 0x85, 0xB4, 0xE9, 0x49, 0x02, 0x76, 0x1F, 0x36, 0x33, 0x5D, 0x29, 0x12, 0x97 }

myRandomString hex_array -b 10
/// { 0x88, 0xCE, 0xBA, 0x9A, 0x12, 0x94, 0x09, 0x57, 0x74, 0x52 }

myRandomString string
/// 3UeAjLySOsTJs5_x

myRandomString string -l 16
/// E5ajdgcOf-lQ5Pwt3oL1t4--Z28Q5NEm
```

## Author

 [ToroLiu](https://github.com/ToroLiu)
 

## License

MIT

