package pkg

type adidas struct {
}

func (a *adidas) MakeShoe() IShoe {
	return &adidasShoe{
		shoe: shoe{
			logo: "adidas",
			size: 32,
		},
	}
}

func (a *adidas) MakeShirt() IShirt {
	return &adidasShirt{
		shirt: shirt{
			logo: "adidas",
			size: "xxl",
		},
	}
}
