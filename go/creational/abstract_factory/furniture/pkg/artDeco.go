package pkg

type artDeco struct {
}

func (a *artDeco) MakeChair() IChair {
	return &artDecoChair{
		chair: chair{
			name: "art deco chair",
		},
	}
}

func (a *artDeco) MakeTable() ITable {
	return &artDecoTable{
		table: table{
			name: "art deco table",
		},
	}
}

func (a *artDeco) MakeSofa() ISofa {
	return &artDecoSofa{
		sofa: sofa{
			name: "art deco sofa",
		},
	}
}
