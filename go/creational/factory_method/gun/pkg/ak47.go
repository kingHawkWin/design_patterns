package pkg

type ak47 struct {
	gun
}

func newAk47() IGun {
	return &ak47{
		gun: gun{
			name:  "ak47",
			power: 89,
		},
	}
}
