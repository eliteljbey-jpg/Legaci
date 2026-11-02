"""One-off: shifts the three black garment mockups to on-palette colors.
Usage: python3 scripts/recolor-black-mockups.py <source-dir> <out-dir>
Only near-black, low-chroma pixels are lifted, so the printed art stays as designed."""
import sys
from PIL import Image, ImageFilter
import numpy as np
JOBS={'mockup-saturn-tshirt':(62,22,112),'mockup-saturn-hoodie-back-8':(62,22,112),'mockup-saturn-root-chakra-tee':(176,32,38)}
src,out=sys.argv[1:3]
for name,color in JOBS.items():
    im=Image.open(f'{src}/{name}.webp').convert('RGB')
    a=np.asarray(im).astype(float)/255
    mx,mn=a.max(2),a.min(2)
    m=np.clip((0.30-mx)/0.12,0,1)*np.clip((0.09-(mx-mn))/0.05,0,1)
    m=np.asarray(Image.fromarray((m*255).astype('uint8')).filter(ImageFilter.GaussianBlur(1.2))).astype(float)/255
    c=np.array(color)/255
    screened=1-(1-a)*(1-c)
    r=a*(1-m[...,None])+screened*m[...,None]
    Image.fromarray((r*255).astype('uint8')).save(f'{out}/{name}.webp',quality=86)
