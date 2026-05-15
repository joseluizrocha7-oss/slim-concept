import instaloader
import uuid
import os
import shutil

def baixar_imagem_insta(url):
    # Configura o instaloader para baixar tanto fotos quanto vídeos, sem lixo extra
    L = instaloader.Instaloader(
        download_videos=True,
        download_video_thumbnails=False,
        save_metadata=False,
        download_comments=False,
        download_geotags=False,
        post_metadata_txt_pattern=""
    )
    
    # Tenta extrair o shortcode (código) do link
    try:
        if "/p/" in url:
            shortcode = url.split("/p/")[1].split("/")[0]
        elif "/reel/" in url:
            shortcode = url.split("/reel/")[1].split("/")[0]
        else:
            print("Formato de link não reconhecido. Use um link de post ou reel do Instagram.")
            return
    except Exception:
        print("Erro ao interpretar a URL.")
        return

    print(f"\nBuscando post: {shortcode}...")
    
    target_dir = "temp_insta"
    pasta_img = os.path.join("assets", "img")
    pasta_video = os.path.join("assets", "videos")
    
    # Garante que as pastas existem
    os.makedirs(pasta_img, exist_ok=True)
    os.makedirs(pasta_video, exist_ok=True)

    try:
        post = instaloader.Post.from_shortcode(L.context, shortcode)
        L.download_post(post, target=target_dir)
        
        # Move os arquivos separando fotos de vídeos
        arquivos_baixados = 0
        for filename in os.listdir(target_dir):
            caminho_antigo = os.path.join(target_dir, filename)
            
            # Se for Vídeo
            if filename.lower().endswith(('.mp4', '.mov')):
                novo_nome = f"insta_video_{shortcode}_{uuid.uuid4().hex[:6]}.mp4"
                caminho_novo = os.path.join(pasta_video, novo_nome)
                shutil.move(caminho_antigo, caminho_novo)
                print(f"✅ Sucesso! Vídeo salvo em: {caminho_novo}")
                arquivos_baixados += 1
                
            # Se for Foto
            elif filename.lower().endswith(('.jpg', '.png', '.webp', '.jpeg')):
                novo_nome = f"insta_foto_{shortcode}_{uuid.uuid4().hex[:6]}.jpg"
                caminho_novo = os.path.join(pasta_img, novo_nome)
                shutil.move(caminho_antigo, caminho_novo)
                print(f"✅ Sucesso! Foto salva em: {caminho_novo}")
                arquivos_baixados += 1
        
        if arquivos_baixados == 0:
            print("Nenhuma mídia (foto ou vídeo) encontrada neste post.")
            
    except Exception as e:
        print(f"\n❌ Falha ao baixar. Erro: {e}")
        print("Dica: Se o Instagram estiver bloqueando, pode ser uma conta privada ou limite de IP do Insta.")
    finally:
        # Limpa os arquivos de texto/temporários
        if os.path.exists(target_dir):
            shutil.rmtree(target_dir, ignore_errors=True)

if __name__ == "__main__":
    print("-" * 50)
    print(" DOWNLOADER DE INSTAGRAM (FOTOS E VÍDEOS)")
    print("-" * 50)
    print("Nota: O script é inteligente e salva automaticamente:")
    print(" - Fotos na pasta: assets/img/")
    print(" - Vídeos na pasta: assets/videos/")
    print("-" * 50)
    
    while True:
        link = input("\nCole o link do post/reel (ou digite 'sair'): ").strip()
        if link.lower() in ['sair', 'exit', 'quit']:
            break
        if link:
            baixar_imagem_insta(link)
