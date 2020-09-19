package topinteviewquestions

import "strings"

func romanToInt(s string) int {
	roman := map[string]int{
		"M": 1000,
		"D": 500,
		"C": 100,
		"L": 50,
		"X": 10,
		"V": 5,
		"I": 1,
	}

	result := 0
	slice := strings.Split(s, "")
	for i := 0; i < len(slice); i++ {
		if (i+1) != len(slice) && roman[slice[i]] < roman[slice[i+1]] {
			result -= roman[slice[i]]
		} else {
			result += roman[slice[i]]
		}
	}
	return result
}
