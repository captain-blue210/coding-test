package topinteviewquestions

import "math"

func reverse(x int) int {
	reverse := 0
	for {
		if x != 0 {
			pop := x % 10
			x /= 10
			reverse = reverse*10 + pop
		} else {
			break
		}
	}

	if reverse < math.MinInt32 || reverse > math.MaxInt32 {
		return 0
	}

	return reverse
}
