package pkg

type musket struct {
	gun
}

func newMusket() IGun {
	return &musket{
		gun: gun{
			name:  "musket",
			power: 43,
		},
	}
}
