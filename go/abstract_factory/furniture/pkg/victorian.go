package pkg

type victorian struct {
}

func (v *victorian) MakeChair() IChair {
	return &victorianChair{
		chair: chair{
			name: "victorian chair",
		},
	}
}

func (v *victorian) MakeTable() ITable {
	return &victorianTable{
		table: table{
			name: "victorian table",
		},
	}
}

func (v *victorian) MakeSofa() ISofa {
	return &victorianSofa{
		sofa: sofa{
			name: "victorian sofa",
		},
	}
}
