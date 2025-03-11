import os
import tiktoken

def chunk_text_by_tokens(text, tokenizer, chunk_size):
    """
    テキストをトークン単位で chunk_size ごとに分割し、文字列として返す関数。
    """
    # テキストをトークン化
    tokens = tokenizer.encode(text)
    
    # chunk_sizeごとに分割したリストを作成
    chunks = []
    for i in range(0, len(tokens), chunk_size):
        chunk_tokens = tokens[i:i + chunk_size]
        # トークン列をテキストにデコード
        chunk_text = tokenizer.decode(chunk_tokens)
        chunks.append(chunk_text)
    
    return chunks

def main():
    # ▼▼▼ 必要に応じて変更可能なパラメータ ▼▼▼
    input_dir = "/Users/captain-blue/Library/Mobile Documents/iCloud~md~obsidian/Documents/second-brain/logs"
    output_dir = "/Users/captain-blue/Library/Mobile Documents/iCloud~md~obsidian/Documents/second-brain/_chunked"
    chunk_size = 1000  # 1チャンクあたりのトークン数
    
    # tiktoken のエンコーダを指定
    # ここでは gpt-3.5 相当のエンコーダを例示
    # 必要に応じて "cl100k_base" などを使用してください
    tokenizer = tiktoken.get_encoding("gpt2")
    
    # 出力先のディレクトリが存在しない場合は作成
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # 入力ディレクトリ内の .txt ファイルを取得
    file_list = [f for f in os.listdir(input_dir) if f.endswith(".txt")]
    
    for file_name in file_list:
        input_path = os.path.join(input_dir, file_name)
        with open(input_path, "r", encoding="utf-8") as f:
            text_data = f.read()
        
        # テキストをトークン数単位でチャンク分割
        chunks = chunk_text_by_tokens(text_data, tokenizer, chunk_size)
        
        # 元のファイル名 (拡張子なし) を取得
        base_name = os.path.splitext(file_name)[0]
        
        # 分割後のチャンクを順次ファイルに書き出し
        for idx, chunk in enumerate(chunks, start=1):
            output_file_name = f"{base_name}_{idx}.txt"
            output_path = os.path.join(output_dir, output_file_name)
            with open(output_path, "w", encoding="utf-8") as out_f:
                out_f.write(chunk)
            
            print(f"Created chunk: {output_file_name} (tokens={len(tokenizer.encode(chunk))})")

if __name__ == "__main__":
    main()
